import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Buffer} from './model/buffer';

import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { DispLog } from './model/modelFormInput';
//import {nedodb} from './nedodb';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(private http: HttpClient) { }

  private formUrl = 'http://localhost:52664';  // URL to web api
  private formUrlAuto = 'http://localhost:52664/api/DispatcherLog';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  
  getBuffer(): Observable<DispLog[]>{
    return this.http.get<DispLog[]>(this.formUrl+"/dispatcher")
    .pipe();
  }
  createBuffer(forms:DispLog[]): Observable<any>{
    return this.http.post(this.formUrl+"/api/DispatcherLog",forms);
  }
  /*getKEC(): KEC {
    return _KEC;
  }
  getObzhig(): Obzhig {
    return _obzhig;
  }
  getSheloch(): Sheloch {
    return _sheloch;
  }
  getVelcCeh(): VelcCeh {
    return _velcCeh;
  }
  getGMC(): GMC {
    return _transp;
  }
  getSKC(): SKC{
    return _skc;
  }



  setTransport(transport:Transport): Transport {
    return _transp;
  }
  setKEC(KECin:KEC): KEC {
    return _KEC;
  }
  setObzhig(Obzhigin:Obzhig): Obzhig {
    return _obzhig;
  }
  setSheloch(Shelochin:Sheloch): Sheloch {
    return _sheloch;
  }
  setVelcCeh(VelcCehin:VelcCeh): VelcCeh {
    return _velcCeh;
  }
  setGMC(GMCin:GMC): GMC {
    return _transp;
  }
  setSKC(SKCin:SKC): SKC{
    return _skc;
  }*/
}