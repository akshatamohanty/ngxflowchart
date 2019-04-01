import { Component } from '@angular/core';
import { IFlowchart, FlowchartUtils } from 'ngxflowchart'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  flowchart: IFlowchart; 

  constructor(){
      this.flowchart = FlowchartUtils.newflowchart()
  }

  selectNode(node_index: number): void{  
    console.log('selected node_index', node_index)
  }
}
