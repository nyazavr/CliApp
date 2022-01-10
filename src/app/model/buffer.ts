/*import { transport } from '../model/transport';
import { SKC } from '../model/skc';
import { obzig } from '../model/obzhig';
import { GMC } from '../model/GMC';
import { KEC } from '../model/KEC';
import { velcCeh } from '../model/velcCeh';
import { sheloch } from '../model/sheloch';*/
import {Parameter,Parameterid} from '../model/modelFormInput';

export interface Buffer{
    formType:string;
    htmlText:string;
    _transport?:Parameterid;
    _KEC?:Parameter;
    _Obzhig?:Parameter;
    _sheloch?:Parameter;
    _velcceh?:Parameter;
    _GMC?:Parameter;
    _SKC?:Parameter;
}
