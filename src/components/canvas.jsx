import React, { Component } from "react";
import "../styles/index.css";

const DUMMY_OBSTACLES = [
  '{"col":4,"row":-2,"s":-2}',
  '{"col":4,"row":-1,"s":-3}',
  '{"col":4,"row":0,"s":-4}',
  '{"col":4,"row":1,"s":-5}',
  '{"col":3,"row":2,"s":-5}',
  '{"col":2,"row":3,"s":-5}',
  '{"col":1,"row":4,"s":-5}',
  '{"col":0,"row":5,"s":-5}',
  '{"col":-1,"row":6,"s":-5}',
  '{"col":-2,"row":7,"s":-5}',
  '{"col":4,"row":-4,"s":0}',
  '{"col":3,"row":-4,"s":1}',
  '{"col":2,"row":-4,"s":2}',
  '{"col":1,"row":-4,"s":3}',
  '{"col":2,"row":-5,"s":3}',
  '{"col":3,"row":-6,"s":3}',
  '{"col":4,"row":-7,"s":3}',
  '{"col":5,"row":-9,"s":4}',
  '{"col":6,"row":-9,"s":3}',
  '{"col":7,"row":-9,"s":2}',
  '{"col":8,"row":-9,"s":1}',
  '{"col":9,"row":-9,"s":0}',
  '{"col":10,"row":-9,"s":-1}',
  '{"col":11,"row":-9,"s":-2}',
  '{"col":12,"row":-9,"s":-3}',
  '{"col":13,"row":-9,"s":-4}',
  '{"col":14,"row":-9,"s":-5}',
  '{"col":15,"row":-9,"s":-6}',
  '{"col":15,"row":-8,"s":-7}',
  '{"col":14,"row":-7,"s":-7}',
  '{"col":14,"row":-6,"s":-8}',
  '{"col":13,"row":-5,"s":-8}',
  '{"col":13,"row":-4,"s":-9}',
  '{"col":12,"row":-3,"s":-9}',
  '{"col":12,"row":-2,"s":-10}',
  '{"col":11,"row":-1,"s":-10}',
  '{"col":11,"row":0,"s":-11}',
  '{"col":10,"row":1,"s":-11}',
  '{"col":10,"row":2,"s":-12}',
  '{"col":9,"row":3,"s":-12}',
  '{"col":9,"row":4,"s":-13}',
  '{"col":8,"row":5,"s":-13}',
  '{"col":8,"row":6,"s":-14}',
  '{"col":7,"row":7,"s":-14}',
  '{"col":7,"row":8,"s":-15}',
  '{"col":6,"row":9,"s":-15}',
  '{"col":5,"row":9,"s":-14}',
  '{"col":4,"row":9,"s":-13}',
  '{"col":3,"row":9,"s":-12}',
  '{"col":2,"row":9,"s":-11}',
  '{"col":1,"row":9,"s":-10}',
  '{"col":0,"row":9,"s":-9}',
  '{"col":-1,"row":9,"s":-8}',
  '{"col":-2,"row":9,"s":-7}',
  '{"col":-3,"row":9,"s":-6}',
  '{"col":-4,"row":9,"s":-5}',
  '{"col":-5,"row":9,"s":-4}',
  '{"col":-5,"row":8,"s":-3}',
  '{"col":-5,"row":7,"s":-2}',
  '{"col":-5,"row":6,"s":-1}',
  '{"col":-5,"row":5,"s":0}',
  '{"col":-4,"row":4,"s":0}',
  '{"col":-3,"row":3,"s":0}',
  '{"col":-2,"row":-1,"s":3}',
  '{"col":-2,"row":-2,"s":4}',
  '{"col":-4,"row":1,"s":3}',
  '{"col":-4,"row":2,"s":2}',
  '{"col":-5,"row":3,"s":2}',
  '{"col":-7,"row":4,"s":3}',
  '{"col":-6,"row":4,"s":2}',
  '{"col":-8,"row":4,"s":4}',
  '{"col":-9,"row":4,"s":5}',
  '{"col":-10,"row":4,"s":6}',
  '{"col":-11,"row":4,"s":7}',
  '{"col":-12,"row":4,"s":8}',
  '{"col":-12,"row":2,"s":10}',
  '{"col":-12,"row":3,"s":9}',
  '{"col":-13,"row":4,"s":9}',
  '{"col":-13,"row":5,"s":8}',
  '{"col":-14,"row":6,"s":8}',
  '{"col":-14,"row":7,"s":7}',
  '{"col":-15,"row":8,"s":7}',
  '{"col":-15,"row":9,"s":6}',
  '{"col":-14,"row":9,"s":5}',
  '{"col":-13,"row":9,"s":4}',
  '{"col":-12,"row":9,"s":3}',
  '{"col":-11,"row":9,"s":2}',
  '{"col":-10,"row":9,"s":1}',
  '{"col":-9,"row":9,"s":0}',
  '{"col":-8,"row":9,"s":-1}',
  '{"col":-7,"row":9,"s":-2}',
  '{"col":-6,"row":9,"s":-3}',
  '{"col":-11,"row":1,"s":10}',
  '{"col":-11,"row":0,"s":11}',
  '{"col":-10,"row":-1,"s":11}',
  '{"col":-10,"row":-2,"s":12}',
  '{"col":-9,"row":-3,"s":12}',
  '{"col":-9,"row":-4,"s":13}',
  '{"col":-8,"row":-5,"s":13}',
  '{"col":-8,"row":-6,"s":14}',
  '{"col":-7,"row":-7,"s":14}',
  '{"col":-7,"row":-8,"s":15}',
  '{"col":-6,"row":-9,"s":15}',
  '{"col":-5,"row":-9,"s":14}',
  '{"col":-4,"row":-9,"s":13}',
  '{"col":-3,"row":-9,"s":12}',
  '{"col":-2,"row":-9,"s":11}',
  '{"col":-1,"row":-9,"s":10}',
  '{"col":0,"row":-9,"s":9}',
  '{"col":1,"row":-9,"s":8}',
  '{"col":2,"row":-9,"s":7}',
  '{"col":3,"row":-9,"s":6}',
  '{"col":4,"row":-9,"s":5}',
  '{"col":-2,"row":-8,"s":10}',
  '{"col":-3,"row":-7,"s":10}',
  '{"col":-4,"row":-6,"s":10}',
  '{"col":-5,"row":-5,"s":10}',
  '{"col":-6,"row":-4,"s":10}',
  '{"col":-7,"row":-4,"s":11}',
  '{"col":-6,"row":-2,"s":8}',
  '{"col":-6,"row":-1,"s":7}',
  '{"col":-6,"row":0,"s":6}',
  '{"col":-6,"row":1,"s":5}',
  '{"col":7,"row":-2,"s":-5}',
  '{"col":8,"row":-2,"s":-6}',
  '{"col":9,"row":-3,"s":-6}',
  '{"col":10,"row":-3,"s":-7}',
  '{"col":4,"row":5,"s":-9}',
  '{"col":4,"row":6,"s":-10}',
  '{"col":5,"row":6,"s":-11}',
  '{"col":5,"row":7,"s":-12}'
];

class Canvas extends Component {
  constructor(props) {
    super(props);

    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.handleClick = this.handleClick.bind(this);
    // this.handleClickPlayerMove = this.handleClickPlayerMove.bind(this);
    this.breadthFirstSearch = this.breadthFirstSearch.bind(this);

    this.state = {
      hexSize: 20,
      hexOrigin: {
        x: 400,
        y: 300
      },
      playerPosition: { col: 0, row: 0, s: 0 },
      currentHex: { col: 0, row: 0, s: 0 },
      obstacles: DUMMY_OBSTACLES,
      cameFrom: {},
      hexPathMap: [],
      path: [],
      hexSides: [],
      nearestObstacles:[],
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
    this.canvasInteraction.width = canvasWidth;
    this.canvasInteraction.height = canvasHeight;
    this.canvasView.width = canvasWidth;
    this.canvasView.height = canvasHeight;
    this.getCanvasPosition(this.canvasInteraction);
    this.drawHex(
      this.canvasInteraction,
      this.hexToPix(this.state.playerPosition),
      1,
      "grey",
      "yellow",
      0.2
    );
    this.drawHexes();
    this.drawObstacles();
  }

  shouldComponentUpdate(nextProps, nextState) {
    // if (nextState.currentHex !== this.state.currentHex) {
    //   const { col, row, s, x, y } = nextState.currentHex;
    //   const { canvasWidth, canvasHeight } = this.state.canvasSize;
    //   const ctx = this.canvasInteraction.getContext("2d");
    //   ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    //   // this.drawNeighbors(this.Hex(col, row, s));
    //   this.drawPath();

    //   return true;
    // }

    if (nextState.cameFrom != this.state.cameFrom) {
      const { canvasWidth, canvasHeight } = this.state.canvasSize;
      const ctx = this.canvasView.getContext("2d");
      ctx.clearRect(0, 0, canvasWidth, canvasHeight);
      for (let element in nextState.cameFrom) {
        const { col, row, s } = JSON.parse(element);
        const { x, y } = this.hexToPix(this.Hex(col, row));
        this.drawHex(
          this.canvasView,
          this.Point(x, y),
          1,
          "black",
          "green",
          0.1
        );

        // var from = JSON.parse(nextState.cameFrom[element]);
        // var fromCoord = this.hexToPix(this.Hex(from.col, from.row));
        // this.drawArrow(fromCoord.x, fromCoord.y, x, y);
      }
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
    let hexPathMap = [];

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
          this.drawHex(this.canvasHex, this.Point(x, y), 1, "black", "grey");
          // this.drawHexCoordinates(
          //   this.canvasHex,
          //   this.Point(x, y),
          //   this.Hex(col - posSpacer, row, -(col - posSpacer) - row)
          // );
          var bottomH = JSON.stringify(
            this.Hex(col - posSpacer, row, -(col - posSpacer) - row)
          );
          console.log(this.state.obstacles.includes(bottomH));
          if (!this.state.obstacles.includes(bottomH)) {
            hexPathMap.push(bottomH);
          }
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
          this.drawHex(this.canvasHex, this.Point(x, y), 1, "black", "grey");
          // this.drawHexCoordinates(
          //   this.canvasHex,
          //   this.Point(x, y),
          //   this.Hex(col + negSpacer, row, -(col + negSpacer) - row)
          // );
          var topH = JSON.stringify(
            this.Hex(col + negSpacer, row, -(col + negSpacer) - row)
          );
          if (!this.state.obstacles.includes(topH)) {
            hexPathMap.push(topH);
          }
        }
      }
    }
    hexPathMap = [].concat(hexPathMap);
    this.setState(
      {
        hexPathMap: hexPathMap
      },
      (this.breadthFirstSearchCallback = () =>
        this.breadthFirstSearch(this.state.playerPosition))
    );
  }

  drawHex(canvasID, center, lineWidth, lineColor, fillColor) {
    for (let i = 0; i <= 5; i++) {
      let start = this.getHexCornerCoord(center, i);
      let end = this.getHexCornerCoord(center, i + 1);
      this.fillHex(canvasID, center, fillColor);
      this.drawLine(canvasID, start, end, lineWidth, lineColor);
    }
  }

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

  fillHex(canvasID, center, fillColor) {
    let c0 = this.getHexCornerCoord(center, 0);
    let c1 = this.getHexCornerCoord(center, 1);
    let c2 = this.getHexCornerCoord(center, 2);
    let c3 = this.getHexCornerCoord(center, 3);
    let c4 = this.getHexCornerCoord(center, 4);
    let c5 = this.getHexCornerCoord(center, 5);
    const ctx = canvasID.getContext("2d");
    ctx.beginPath();
    ctx.fillStyle = fillColor;
    ctx.globalAlpha = 0.5;
    ctx.moveTo(c0.x, c0.y);
    ctx.lineTo(c1.x, c1.y);
    ctx.lineTo(c2.x, c2.y);
    ctx.lineTo(c3.x, c3.y);
    ctx.lineTo(c4.x, c4.y);
    ctx.lineTo(c5.x, c5.y);
    ctx.closePath();
    ctx.fill();
  }

  drawLine(canvasID, start, end, width, color) {
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
      this.drawHex(this.canvasInteraction, this.Point(x, y), 2, "red");
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
    let playerPosition = this.state.playerPosition;
    // this.getDistanceLine(this.Hex(0, 0, 0), this.Hex(col, row, s));
    this.getPath(
      this.Hex(playerPosition.col, playerPosition.row, playerPosition.s),
      this.Hex(col, row, s)
    );
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

  // handleClickPlayerMove() {
  //   this.setState({
  //     playerPosition: this.state.currentHex
  //   });
  // }

  getPath(start, current) {
    const { cameFrom } = this.state;
    start = JSON.stringify(start);
    current = JSON.stringify(current);
    if (cameFrom[current] != undefined) {
      var path = [current];
      while (current != start) {
        current = cameFrom[current];
        path.push(current);
      }
      path = [].concat(path);
      this.setState({
        path: path
      });
    }
  }

  drawPath() {
    let path = this.state.path;
    for (let i = 0; i <= path.length - 1; i++) {
      const { col, row } = JSON.parse(path[i]);
      const { x, y } = this.hexToPix(this.Hex(col, row));
      this.drawHex(this.canvasInteraction, this.Point(x, y), 1, "black", "red");
    }
  }
  drawArrow(fromx, fromy, tox, toy) {
    var ctx = this.canvasView.getContext("2d");
    var headlen = 5;
    var angle = Math.atan2(toy - fromy, tox - fromx);
    ctx.beginPath();
    ctx.moveTo(fromx, fromy);
    ctx.lineTo(tox, toy);
    ctx.strokeStyle = "#cc0000";
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(tox, toy);
    ctx.globalAlpha = 0.3;
    ctx.lineTo(
      tox - headlen * Math.cos(angle - Math.PI / 7),
      toy - headlen * Math.sin(angle - Math.PI / 7)
    );
    ctx.lineTo(
      tox - headlen * Math.cos(angle + Math.PI / 7),
      toy - headlen * Math.sin(angle + Math.PI / 7)
    );
    ctx.lineTo(tox, toy);
    ctx.lineTo(
      tox - headlen * Math.cos(angle - Math.PI / 7),
      toy - headlen * Math.sin(angle - Math.PI / 7)
    );
    ctx.strokeStyle = "#cc0000";
    ctx.lineWidth = 5;
    ctx.stroke();
    ctx.fillStyle = "#cc0000";
    ctx.fill();
  }

  handleClick() {
    const { cameFrom, currentHex } = this.state;
    const { col, row, s } = currentHex;
    clearInterval(this.intervalId);
    if (cameFrom[JSON.stringify(this.Hex(col, row, s))]) {
      let path = this.state.path;
      path.pop();
      this.intervalId = setInterval(this.startMoving.bind(this, path), 100);
    }
  }


  //  PICK UP HERE
  //  FOV NOT DRAWING ON LOAD, ONLY ON MOVE

  startMoving(path) {
    if (path.length === 0) {
      clearInterval(this.intervalId);
    } else {
      const { canvasWidth, canvasHeight } = this.state.canvasSize;
      const ctx = this.canvasInteraction.getContext("2d");
      ctx.clearRect(0, 0, canvasWidth, canvasHeight);
      let current = path.pop();
      const { col, row, s } = JSON.parse(current);
      const { x, y } = this.hexToPix(this.Hex(col, row, s));
      this.drawHex(
        this.canvasInteraction,
        this.Point(x, y),
        1,
        "black",
        "yellow",
        0.1
      );
      this.setState(
        { playerPosition: this.Hex(col, row, s) },
        (this.breadthFirstSearchCallback = () =>
          this.breadthFirstSearch(this.state.playerPosition))
      );
    }
  }

  visibleField() {
    const { playerPosition, hexSides } = this.state;

    for (let i = 0; i < hexSides.length; i++) {
      let side = JSON.parse(hexSides[i]);
      this.drawLine(
        this.canvasInteraction,
        { x: side.start.x, y: side.start.y },
        { x: side.end.x, y: side.end.y },
        1,
        "orange"
      );
    }
    let center = this.hexToPix(playerPosition);
    for (let i = 0; i < 360; i++) {
      let beam = this.getHexBeamsCoord(center, i, 800);
      for (let i = 0; i < hexSides.length; i++) {
        let side = JSON.parse(hexSides[i]);
        let intersect = this.lineIntersect(
          center.x,
          center.y,
          beam.x,
          beam.y,
          side.start.x,
          side.start.y,
          side.end.x,
          side.end.y
        );
        if (intersect) {
          this.drawLine(this.canvasInteraction, center, intersect, 1, "yellow");
          break;
        } 
        // else {
        //   this.drawLine(this.canvasInteraction, center, beam, 1, "yellow");
        // }
      }
      // this.drawLine(this.canvasInteraction, lineStart, lineEnd, 1, "red");
    }
  }

  getObstacleSides() {
    const { obstacles, nearestObstacles } = this.state;
    let arr = [];
    nearestObstacles.map(obs => {
      let hexCenter = this.hexToPix(JSON.parse(obs));
      for (let i = 0; i < 6; i++) {
        let start = this.getHexCornerCoord(hexCenter, i);
        let end = this.getHexCornerCoord(hexCenter, i + 1);
        let side = JSON.stringify({ start, end });
        if (!arr.includes(side)) {
          arr.push(side);
        }
      }
    });
    this.setState(
      {
        hexSides: arr
      },
      this.visibleFieldCallBack = () => this.visibleField()
    );
  }

  between(a, b, c) {
    let eps = 0.0000001;
    return a - eps <= b && b <= c + eps;
  }

  lineIntersect(x1, y1, x2, y2, x3, y3, x4, y4) {
    var x =
      ((x1 * y2 - y1 * x2) * (x3 - x4) - (x1 - x2) * (x3 * y4 - y3 * x4)) /
      ((x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4));
    var y =
      ((x1 * y2 - y1 * x2) * (y3 - y4) - (y1 - y2) * (x3 * y4 - y3 * x4)) /
      ((x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4));
    if (isNaN(x) || isNaN(y)) {
      return false;
    } else {
      if (x1 >= x2) {
        if (!this.between(x2, x, x1)) {
          return false;
        }
      } else {
        if (!this.between(x1, x, x2)) {
          return false;
        }
      }
      if (y1 >= y2) {
        if (!this.between(y2, y, y1)) {
          return false;
        }
      } else {
        if (!this.between(y1, y, y2)) {
          return false;
        }
      }
      if (x3 >= x4) {
        if (!this.between(x4, x, x3)) {
          return false;
        }
      } else {
        if (!this.between(x3, x, x4)) {
          return false;
        }
      }
      if (y3 >= y4) {
        if (!this.between(y4, y, y3)) {
          return false;
        }
      } else {
        if (!this.between(y3, y, y4)) {
          return false;
        }
      }
    }
    return { x: x, y: y };
  }

  getHexBeamsCoord(center, i, range) {
    let angle_deg = 1 * i + 30;
    let angle_rad = (Math.PI / 180) * angle_deg;
    let x = center.x + range * Math.cos(angle_rad);
    let y = center.y + range * Math.sin(angle_rad);
    return this.Point(x, y);
  }

  drawObstacles() {
    // CODE FOR DRAWING FROM PREPARED ARRAY LIST OF OBSTACLES
    this.state.obstacles.map(element => {
      const { col, row, s } = JSON.parse(element);
      const { x, y } = this.hexToPix(this.Hex(col, row, s));
      this.drawHex(this.canvasHex, this.Point(x, y), 1, "black", "black");
    });

    // CODE FOR DRAWING VIA CLICK INSTEAD OF FROM PREPARED LIST
    // REVISIT FOR USE WITH RANDOM OBSTACLE GENERATOR
    //
    // const { col, row, s } = this.state.currentHex;
    // let obstacles = this.state.obstacles;
    // if (!obstacles.includes(JSON.stringify(this.Hex(col,row,s)))) {
    //   obstacles = obstacles.concat(JSON.stringify(this.Hex(col,row,s)));
    // } else {
    //   obstacles.map((element, index) => {
    //     if (element === JSON.stringify(this.Hex(col, row, s))) {
    //       obstacles = obstacles
    //         .slice(0, index)
    //         .concat(obstacles.slice(index + 1));
    //     }
    //   });
    // }

    // this.setState({
    //   obstacles: obstacles
    // });
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
    this.setState({
      currentDistanceLine: arr
    });
  }

  cubeDistance(hexA, hexB) {
    const { col, row, s } = this.cubeSubtract(hexA, hexB);
    let dist = (Math.abs(col) + Math.abs(row) + Math.abs(s)) / 2;
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

  getNeighbors(h) {
    let arr = [];
    for (let i = 0; i <= 5; i++) {
      const { col, row, s } = this.getCubeNeighbor(
        this.Hex(h.col, h.row, h.s),
        i
      );
      arr.push(this.Hex(col, row, s));
    }
    return arr;
  }

  breadthFirstSearch(playerPosition) {
    let {obstacles, hexPathMap} = this.state;
    var frontier = [playerPosition];
    var cameFrom = {};
    var nearestObstacles = [];
    cameFrom[JSON.stringify(playerPosition)] = JSON.stringify(playerPosition);

    while (frontier.length != 0) {
      var current = frontier.shift();
      let arr = this.getNeighbors(current);
      arr.map(element => {
        if (
          !cameFrom.hasOwnProperty(JSON.stringify(element)) &&
          hexPathMap.includes(JSON.stringify(element))
        ) {
          frontier.push(element);
          cameFrom[JSON.stringify(element)] = JSON.stringify(current);
        }
        if (obstacles.includes(JSON.stringify(element))) {
          nearestObstacles.push(JSON.stringify(element))
        }
      });
    }
    cameFrom = Object.assign({}, cameFrom);
    this.setState(
      {
        cameFrom: cameFrom,
        nearestObstacles: nearestObstacles,
      },
      (this.getObstacleSidesCallBack = () => this.getObstacleSides())
    );
  }

  render() {
    return (
      <div>
        <canvas ref={canvasHex => (this.canvasHex = canvasHex)}></canvas>
        <canvas
          ref={canvasCoordinates =>
            (this.canvasCoordinates = canvasCoordinates)
          }
        >
          {" "}
        </canvas>
        <canvas ref={canvasView => (this.canvasView = canvasView)}></canvas>
        <canvas
          ref={canvasInteraction =>
            (this.canvasInteraction = canvasInteraction)
          }
          onMouseMove={this.handleMouseMove}
          onClick={this.handleClick}
        ></canvas>
        <button className="expandButton" onClick={this.handleExpandClick}>
          Expand
        </button>
      </div>
    );
  }
}

export default Canvas;
