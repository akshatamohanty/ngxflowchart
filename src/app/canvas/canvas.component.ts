import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css']
})
export class CanvasComponent implements OnInit {

  	nodes = [
        {name: "node1", inputPorts: [{name: "port1"}, {name: "port2"}, {name: "port3"}, 
        {name: "port1"}, {name: "port2"}, {name: "port3"}, {name: "port1"}, {name: "port2"}, {name: "port3"}], outputPorts: [{name: "oport1"}, {name: "oport1"}], position: {x: 0, y: 0}, isDragging: false },
  			{name: "node2", inputPorts: [{name: "port1"}, {name: "port2"}, {name: "port3"}], outputPorts: [{name: "oport1"}], position: {x: 300, y: 0}, isDragging: false }, 
        {name: "node3", inputPorts: [{name: "port1"}, {name: "port2"}], outputPorts: [], position: {x: 0, y: 300}, isDragging: false }]
  	edges = [];
  	selectedNode = this.nodes[0];
    connection: any = [];

  	constructor() { }
 	  
    ngOnInit() {
 		  this.draw();

      this.nodes.map(function(node){
          let margin = 10; 
          let port_width = 15; 
          let max = node.inputPorts.length > node.outputPorts.length ? node.inputPorts.length : node.outputPorts.length; 
          let width = margin*(max+1) + (max)*port_width;
          node["width"] = width;
      })  

  	}

    onDragStart($event, node): void{
      $event.dataTransfer.setDragImage( new Image(), 0, 0);
      // todo : find more elegant solution
      node.dragStart = {x: $event.pageX, y: $event.pageY}; 
    }

    onDrag($event, node): void{
      let relX: number = $event.pageX - node.dragStart.x; 
      let relY: number = $event.pageY - node.dragStart.y;
      node.position.x += relX; 
      node.position.y += relY; 
      node.dragStart = {x: $event.pageX, y: $event.pageY}; 
    }

    dragEnd($event, node): void{
      let relX: number = $event.pageX - node.dragStart.x; 
      let relY: number = $event.pageY - node.dragStart.y;
      node.position.x += relX; 
      node.position.y += relY; 
    }
  
    link(): void{
      console.log("port dragging");
    }

    drawEdge(point1, point2): void{

    }

    dragLink(): void{

    }

  	portDrag($event){
  		let posX = $event.clientX; 
  		let posY = $event.clientY; 
		
  		let canvas :HTMLCanvasElement = <HTMLCanvasElement>document.getElementById('graph-edges');

  		if(canvas == null ){
  			throw Error("Canvas with given not found");
  		}

  		if (canvas.getContext) {
  		    var ctx = canvas.getContext('2d');
  			ctx.beginPath();
  			ctx.strokeStyle = 'green';
  			ctx.moveTo(posX, posY);
  			ctx.arcTo(posX, posY, posX+ 20, posY + 20, 20);
  			ctx.stroke();
  		}
  		else{
  			throw Error("Element is not canvas");
  		}
  	}

  	draw() {
  		let canvas :HTMLCanvasElement = <HTMLCanvasElement>document.getElementById('graph-edges');

  		if(canvas == null ){
  			throw Error("Canvas with given not found");
  		}

  		if (canvas.getContext) {
  		    var ctx = canvas.getContext('2d');
          ctx.beginPath();
          ctx.moveTo(75, 25);
          ctx.quadraticCurveTo(25, 25, 25, 62.5);
          ctx.quadraticCurveTo(25, 100, 50, 100);
          ctx.quadraticCurveTo(50, 120, 30, 125);
          ctx.quadraticCurveTo(60, 120, 65, 100);
          ctx.quadraticCurveTo(125, 100, 125, 62.5);
          ctx.quadraticCurveTo(125, 25, 75, 25);
          ctx.stroke();
  		}
  		else{
  			throw Error("Element is not canvas");
  	}
	
	}

}
