import { Type } from "@angular/core";
import {transport} from "./transport"


/*export interface ParameterVal{
    [index:number]:string;
}*/

export interface Parameter{
    [index:string]:string;
    
}

export interface DispLog{
    idDisp:number; 
    name:string; 
    date:string;
    value:string; 
    formId:number; 
}
