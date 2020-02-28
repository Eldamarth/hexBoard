import React, {Component} from 'react';
import '../styles/index.css';

class Canvas extends Component{
    constructor(props){
        super(props);

        this.state ={
            hexSize : 20,
            hexOrigin: {
                x:400,
                y:300,
            }
        }
    }


    componentWillMount(){
        this.setState({
            canvasSize:{
                canvasHeight: 600,
                canvasWidth: 800,
            }
        })
    }

    componentDidMount(){
        const {canvasHeight, canvasWidth} = this.state.canvasSize;
        this.canvasHex.width = canvasWidth;
        this.canvasHex.height = canvasHeight;
        // this.drawHex(this.canvasHex, {x:50, y:50})
        this.drawHexes();
        
    }

    drawHexes(){
        for (let row = 0; row <=4; row++) {
            for (let col = 0; col <=4; col++) {
                // console.log(row,col);
                let center = this.hexToPix(this.Hex(row,col));
                // console.log(center);
                this.drawHex(this.canvasHex, center);
                this.drawHexCoordinates(this.canvasHex, center, this.Hex(row,col))
            }
            
        }
    }

    drawHex(canvasID, center) {
        for (let i = 0; i <= 5; i++) {
           let start = this.getHexCornerCoord(center,i);
           let end = this.getHexCornerCoord(center, i+1);
           this.drawLine(canvasID, {x:start.x,y:start.y},{x: end.x,y: end.y})
          
            
        }
    }

    // Heavily modified version of redblobgames.com's hex library pointy_hex_corner function
    getHexCornerCoord(center, i){
        let angle_deg = 60 * i + 30;
        let angle_rad = Math.PI / 180 * angle_deg;
        let x = center.x + this.state.hexSize * Math.cos(angle_rad);
        let y = center.y + this.state.hexSize * Math.sin(angle_rad);
        return this.Point(x,y);
    }

    hexToPix(hex){

        let {hexOrigin} = this.state;
        let x = this.state.hexSize * (Math.sqrt(3) * hex.col  +  Math.sqrt(3)/2 * hex.row)+hexOrigin.x;
        let y = this.state.hexSize * (3/2 * hex.row)+hexOrigin.y;
        return this.Point(x, y);
    }
    
    Point(x,y) {
        return {x: x, y: y}
    }

    Hex(c,r) {
        return {col:c,row:r}
    }

    drawLine(canvasID, start, end){
        const ctx = canvasID.getContext("2d");
        ctx.beginPath();
        ctx.moveTo(start.x, start.y);
        ctx.lineTo(end.x, end.y);
        ctx.stroke();
        ctx.closePath();
    }

    drawHexCoordinates(canvasID, center, hex){
        const ctx = canvasID.getContext("2d");
        ctx.fillText(hex.col, center.x-10, center.y);
        ctx.fillText(hex.row, center.x+7, center.y);
    }

    render() {
        return (
        <div>
            This is the canvas
            <canvas ref={canvasHex => this.canvasHex = canvasHex}></canvas>
        </div>
        )
    }

}

export default Canvas;