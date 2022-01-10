import { Type } from "@angular/core";
import {transport} from "./transport"




export interface Parameter{
    [index:string]:string;
}
export interface Parameterid{
    [key:number]:string;
}
/*export interface KEC{
    [ingex:string]:string;
}
export interface Sheloch{
    [ingex:string]:string;
}
export interface VelcCeh{
    [ingex:string]:string;
}
export interface GMC{
    [ingex:string]:string;
}
export interface SKC{
    [ingex:string]:string;
}*/
export interface DispLog{
    idDisp:number; 
    //name:string; 
    date:string;
    value:string; 
    formId:number; 
}
