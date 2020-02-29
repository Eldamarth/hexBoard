import React, { Component } from "react";
import "../styles/index.css";

class Canvas extends Component {
  constructor(props) {
    super(props);


    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.state = {
      hexSize: 20,
      hexOrigin: {
        x: 400,
        y: 300
      }
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
          y > hexHeight / 2 && y < canvasHeight - hexHeight / 2
        ) {
          this.drawHex(this.canvasHex, this.Point(x, y));
          this.drawHexCoordinates(
            this.canvasHex,
            this.Point(x, y),
            this.Hex(col - posSpacer, row)
          );
        }
      }
    }
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
          y > hexHeight / 2 && y < canvasHeight - hexHeight / 2
        ) {
          this.drawHex(this.canvasHex, this.Point(x, y));
          this.drawHexCoordinates(
            this.canvasHex,
            this.Point(x, y),
            this.Hex(col + negSpacer, row)
          );
        }
      }
    }
  }

  drawHex(canvasID, center) {
    for (let i = 0; i <= 5; i++) {
      let start = this.getHexCornerCoord(center, i);
      let end = this.getHexCornerCoord(center, i + 1);
      this.drawLine(
        canvasID,
        { x: start.x, y: start.y },
        { x: end.x, y: end.y }
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

  getCanvasPosition(canvasID){
      let rect = canvasID.getBoundingClientRect();
      this.setState({
          canvasPosition: { left: rect.left, right:rect.right,top:rect.top,bottom:rect.bottom}
      })
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

  Point(x, y) {
    return { x: x, y: y };
  }

  Hex(c, r) {
    return { col: c, row: r };
  }

  drawLine(canvasID, start, end) {
    const ctx = canvasID.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(start.x, start.y);
    ctx.lineTo(end.x, end.y);
    ctx.stroke();
    ctx.closePath();
  }

  drawHexCoordinates(canvasID, center, hex) {
    const ctx = canvasID.getContext("2d");
    ctx.fillText(hex.col, center.x - 10, center.y);
    // ctx.fillText(',', center.x,center.y)
    ctx.fillText(hex.row, center.x + 3, center.y);
  }
  handleMouseMove(e){
      const {left, right, top, bottom} = this.state.canvasPosition;
      console.log(e.pageX-left,e.pageY-top)

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
        ></canvas>
      </div>
    );
  }
}

export default Canvas;
