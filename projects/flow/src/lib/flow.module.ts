import { NgModule } from '@angular/core';
import { FlowComponent } from './flow.component';
import { Node } from '../components/node/node.component'
import { Wire } from '../components/wire/wire.component'

@NgModule({
  declarations: [
    FlowComponent, 
    Node, 
    Wire
  ],
  imports: [
  ],
  exports: [FlowComponent]
})
export class FlowModule { }
