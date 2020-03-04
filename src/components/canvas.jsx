import React, { Component } from "react";
import "../styles/index.css";

class Canvas extends Component {
  constructor(props) {
    super(props);

    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.handleClick = this.handleClick.bind(this)
    this.state = {
      hexSize: 20,
      hexOrigin: {
        x: 400,
        y: 300
      },
      playerPosition: {col:0,row:0,s:0,x:0,y:0},
      currentHex: {col:0,row:0,s:0,x:0,y:0}
    };
  }

  componentWillMount() {
    let hexParameters = this.getHexParameters();
    this.setState({
      canvasSize: {
        canvasHeight: 600,
        canvasWidth: 800
      },
      hexParameters: hexParameters
    });
  }

  componentDidMount() {
    const { canvasHeight, canvasWidth } = this.state.canvasSize;
    this.canvasHex.width = canvasWidth;
    this.canvasHex.height = canvasHeight;
    this.canvasCoordinates.width = canvasWidth;
    this.canvasCoordinates.height = canvasHeight;
    this.getCanvasPosition(this.canvasCoordinates);
    this.drawHexes();
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.currentHex !== this.state.currentHex) {
      const { col, row, s, x, y } = nextState.currentHex;
      const { canvasWidth, canvasHeight } = this.state.canvasSize;
      const ctx = this.canvasCoordinates.getContext("2d");
      ctx.clearRect(0, 0, canvasWidth, canvasHeight);
      // this.drawNeighbors(this.Hex(col, row, s));
      let currentDistanceLine = nextState.currentDistanceLine;
      // console.log(currentDistanceLine)
      for (let i = 0; i <= currentDistanceLine.length - 2; i++) {
        if(i===0){
          this.drawHex(
            this.canvasCoordinates,
            this.Point(currentDistanceLine[i].x, currentDistanceLine[i].y),
            "black",
            1,
            "red"
          );
        } else{
           this.drawHex(
          this.canvasCoordinates,
          this.Point(currentDistanceLine[i].x, currentDistanceLine[i].y),
          "black",
          1,
          "grey"
        );
        }

       
      }
      this.drawHex(this.canvasCoordinates, this.Point(x, y), "black", 1,"grey");
      return true;
    }
    return false;
  }

  drawHexes() {
    const { canvasWidth, canvasHeight } = this.state.canvasSize;
    const { hexWidth, hexHeight, vertDist, horDist } = this.state.hexParameters;
    const hexOrigin = this.state.hexOrigin;
    // column margins
    let cLeftSide = Math.round(hexOrigin.x / horDist) * 4;
    let cRightSide = Math.round((canvasWidth - hexOrigin.x) / horDist);
    // row margins
    let rTopSide = Math.round(hexOrigin.y / vertDist);
    let rBottomSide = Math.round((canvasHeight - hexOrigin.y) / vertDist);


    //  BOTTOM HALF OF CANVAS
    let posSpacer = 0;
    for (let row = 0; row <= rBottomSide; row++) {
      if (row % 2 === 0 && row !== 0) {
        posSpacer++;
      }
      for (let col = -cLeftSide; col <= cRightSide; col++) {
        const { x, y } = this.hexToPix(this.Hex(col - posSpacer, row));

        if (
          x > hexWidth / 2 &&
          x < canvasWidth - hexWidth / 2 &&
          y > hexHeight / 2 &&
          y < canvasHeight - hexHeight / 2
        ) {
          this.drawHex(this.canvasHex, this.Point(x, y), "black",1, "grey");
          // this.drawHexCoordinates(
          //   this.canvasHex,
          //   this.Point(x, y),
          //   this.Hex(col - posSpacer, row, -(col - posSpacer) - row)
          // );
        }
      }
    }

    // TOP HALF OF CANVAS
    let negSpacer = 0;
    for (let row = -1; row >= -rTopSide; row--) {
      if (row % 2 !== 0) {
        negSpacer++;
      }
      for (let col = -cLeftSide; col <= cRightSide; col++) {
        const { x, y } = this.hexToPix(this.Hex(col + negSpacer, row));

        if (
          x > hexWidth / 2 &&
          x < canvasWidth - hexWidth / 2 &&
          y > hexHeight / 2 &&
          y < canvasHeight - hexHeight / 2
        ) {
          this.drawHex(this.canvasHex, this.Point(x, y), "black",1, "grey");
          // this.drawHexCoordinates(
          //   this.canvasHex,
          //   this.Point(x, y),
          //   this.Hex(col + negSpacer, row, -(col + negSpacer) - row)
          // );
        }
      }
    }
  }

  drawHex(canvasID, center, lineColor, width, fillColor) {
    for (let i = 0; i <= 5; i++) {
      let start = this.getHexCornerCoord(center, i);
      let end = this.getHexCornerCoord(center, i + 1);
      this.fillHex(canvasID,center,fillColor);
      this.drawLine(
        canvasID,
        start,
        end,
        lineColor,
        width
      );
    }
  }

  // Heavily modified version of redblobgames.com's hex library pointy_hex_corner function
  getHexCornerCoord(center, i) {
    let angle_deg = 60 * i + 30;
    let angle_rad = (Math.PI / 180) * angle_deg;
    let x = center.x + this.state.hexSize * Math.cos(angle_rad);
    let y = center.y + this.state.hexSize * Math.sin(angle_rad);
    return this.Point(x, y);
  }

  getHexParameters() {
    let hexHeight = this.state.hexSize * 2;
    let hexWidth = (Math.sqrt(3) / 2) * hexHeight;
    let vertDist = hexHeight * 0.75;
    let horDist = hexWidth;
    return { hexWidth, hexHeight, vertDist, horDist };
  }

  getCanvasPosition(canvasID) {
    let rect = canvasID.getBoundingClientRect();
    this.setState({
      canvasPosition: {
        left: rect.left,
        right: rect.right,
        top: rect.top,
        bottom: rect.bottom
      }
    });
  }

  hexToPix(hex) {
    let { hexOrigin } = this.state;
    let x =
      this.state.hexSize *
        (Math.sqrt(3) * hex.col + (Math.sqrt(3) / 2) * hex.row) +
      hexOrigin.x;
    let y = this.state.hexSize * ((3 / 2) * hex.row) + hexOrigin.y;
    return this.Point(x, y);
  }

  pixToHex(point) {
    let { hexSize } = this.state;
    let { hexOrigin } = this.state;

    let c =
      (((point.x - hexOrigin.x) * Math.sqrt(3)) / 3 -
        (point.y - hexOrigin.y) / 3) /
      hexSize;
    let r = ((2 / 3) * (point.y - hexOrigin.y)) / hexSize;
    return this.Hex(c, r, -c - r);
  }

  Point(x, y) {
    return { x: x, y: y };
  }

  Hex(c, r, s) {
    return { col: c, row: r, s: s };
  }

  fillHex(canvasID, center, fillColor){
    let c0 = this.getHexCornerCoord(center, 0);
    let c1 = this.getHexCornerCoord(center, 1);
    let c2 = this.getHexCornerCoord(center, 2);
    let c3 = this.getHexCornerCoord(center, 3);
    let c4 = this.getHexCornerCoord(center, 4);
    let c5 = this.getHexCornerCoord(center, 5);
    const ctx = canvasID.getContext("2d");
    ctx.beginPath();
    ctx.fillStyle = fillColor;
    ctx.globalAlpha = 0.1;
    ctx.moveTo(c0.x, c0.y);
    ctx.lineTo(c1.x,c1.y);
    ctx.lineTo(c2.x,c2.y);
    ctx.lineTo(c3.x,c3.y);
    ctx.lineTo(c4.x,c4.y);
    ctx.lineTo(c5.x,c5.y);
    ctx.closePath();
    ctx.fill();
    


  }

  drawLine(canvasID, start, end, color, width) {
    const ctx = canvasID.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(start.x, start.y);
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    ctx.lineTo(end.x, end.y);
    ctx.stroke();
    ctx.closePath();
  }

  drawHexCoordinates(canvasID, center, hex) {
    const ctx = canvasID.getContext("2d");
    ctx.fillText(hex.col, center.x + 6, center.y);
    ctx.fillText(hex.row, center.x - 3, center.y + 15);
    ctx.fillText(hex.s, center.x - 12, center.y);
  }

  drawNeighbors(h) {
    for (let i = 0; i <= 5; i++) {
      const { col, row, s } = this.getCubeNeighbor(
        this.Hex(h.col, h.row, h.s),
        i
      );
      const { x, y } = this.hexToPix(this.Hex(col, row, s));
      this.drawHex(this.canvasCoordinates, this.Point(x, y), "red", 2);
    }
  }

  handleMouseMove(e) {
    const { canvasWidth, canvasHeight } = this.state.canvasSize;
    const { hexWidth, hexHeight, vertDist, horDist } = this.state.hexParameters;
    const { left, right, top, bottom } = this.state.canvasPosition;
    let offsetX = e.pageX - left;
    let offsetY = e.pageY - top;
    const { col, row, s } = this.cubeRound(
      this.pixToHex(this.Point(offsetX, offsetY))
    );
    const { x, y } = this.hexToPix(this.Hex(col, row, s));
    let {playerPosition} = this.state;
    this.getDistanceLine(this.Hex(playerPosition.col, playerPosition.row, playerPosition.s), this.Hex(col, row, s));
    if (
      x > hexWidth / 2 &&
      x < canvasWidth - hexWidth / 2 &&
      y > hexHeight / 2 &&
      y < canvasHeight - hexHeight / 2
    ) {
      this.setState({
        currentHex: { col, row, s, x, y }
      });
    }
  }

  handleClick(){
    this.setState({
      playerPosition: this.state.currentHex,
    })
  }

  linearInt(a, b, t) {
    return a + (b - a) * t;
  }

  getDistanceLine(hexA, hexB) {
    let dist = this.cubeDistance(hexA, hexB);
    var arr = [];
    for (let i = 0; i <= dist; i++) {
      let center = this.hexToPix(
        this.cubeRound(this.cubeLinearInt(hexA, hexB, (1.0 / dist) * i))
      );
      arr = arr.concat(center);
    }
    console.log(arr);
    this.setState({
      currentDistanceLine: arr
    });
  }

  cubeDistance(hexA, hexB) {
    const { col, row, s } = this.cubeSubtract(hexA, hexB);
    let dist = (Math.abs(col) + Math.abs(row) + Math.abs(s)) /2;
    console.log(dist);
    return dist;
  }

  cubeLinearInt(hexA, hexB, t) {
    return this.Hex(
      this.linearInt(hexA.col, hexB.col, t),
      this.linearInt(hexA.row, hexB.row, t),
      this.linearInt(hexA.s, hexB.s, t)
    );
  }

  cubeRound(cube) {
    let rx = Math.round(cube.col);
    let ry = Math.round(cube.row);
    let rz = Math.round(cube.s);

    let xDiff = Math.abs(rx - cube.col);
    let yDiff = Math.abs(ry - cube.row);
    let zDiff = Math.abs(rz - cube.s);

    if (xDiff > yDiff && xDiff > zDiff) {
      rx = -ry - rz;
    } else if (yDiff > zDiff) {
      ry = -rx - rz;
    } else {
      rz = -rx - ry;
    }

    return this.Hex(rx, ry, rz);
  }

  cubeDirection(direction) {
    const cubeDirections = [
      this.Hex(1, 0, -1),
      this.Hex(1, -1, 0),
      this.Hex(0, -1, 1),
      this.Hex(-1, 0, 1),
      this.Hex(-1, 1, 0),
      this.Hex(0, 1, -1)
    ];
    return cubeDirections[direction];
  }

  cubeAdd(a, b) {
    return this.Hex(a.col + b.col, a.row + b.row, a.s + b.s);
  }

  cubeSubtract(hexA, hexB) {
    return this.Hex(hexA.col - hexB.col, hexA.row - hexB.row, hexA.s - hexB.s);
  }

  getCubeNeighbor(h, direction) {
    return this.cubeAdd(h, this.cubeDirection(direction));
  }

  render() {
    return (
      <div>
        <canvas ref={canvasHex => (this.canvasHex = canvasHex)}></canvas>
        <canvas
          ref={canvasCoordinates =>
            (this.canvasCoordinates = canvasCoordinates)
          }
          onMouseMove={this.handleMouseMove}
          onClick={this.handleClick}
        ></canvas>
      </div>
    );
  }
}

export default Canvas;
