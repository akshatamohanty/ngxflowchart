import { PortType, InputType, OutputType } from './types';

interface IPort {
    id: string;
    type: PortType,
    isConnected: boolean,
    name: string, 
    default: any,
    value: any
}

export interface IPortInput extends IPort{
    type: PortType.Input,
    meta: {
        mode: InputType, 
        opts: any
    }
}

export interface IPortOutput extends IPort{
    type: PortType.Output,
    meta: {
        mode: OutputType, 
    }
}