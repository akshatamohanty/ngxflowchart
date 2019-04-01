import { IPortInput, IPortOutput } from '../port';

export interface IEdge{
    source: IPortOutput, 
    target: IPortInput,
    selected: boolean
}