import { Component } from '@angular/core';
import { IFlowchart } from 'ngxflowchart'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private flowchart: IFlowchart; 

  constructor(){
      this.flowchart = [];
  }

  selectNode(node_index: number): void{  
    console.log('selected node_index', node_index)
  }
}
