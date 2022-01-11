
import { Component, OnInit, Output,EventEmitter, Input,ViewContainerRef,ElementRef,ComponentFactoryResolver,Injector, AfterViewInit, ViewChild,Renderer2} from '@angular/core';
import {Buffer} from '../model/buffer';

import {DispLog,Parameter} from '../model/modelFormInput';
import { transport } from '../model/transport';
import { SKC } from '../model/skc';
import { obzig } from '../model/obzhig';
import { GMC } from '../model/GMC';
import { KEC } from '../model/KEC';
import { velcCeh } from '../model/velcCeh';
import { sheloch } from '../model/sheloch';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css']
  //styleUrls: ['./document.component.css']
})
export class DocumentComponent implements OnInit, AfterViewInit {

  constructor(
    private componentFactory: ComponentFactoryResolver,
    private injector: Injector,
    private renderer: Renderer2
  ){
  }

  @ViewChild("#doc") reader!: ElementRef;
  @Input() buffer2: Buffer={
    htmlText:"adsdfsfo",
    formType:""}
  @Output() buffer2Change = new EventEmitter<Buffer>();

  _skc:Parameter={
    
    "str1":"0",  
    "str11":"0",
    "str12":"0",
    "str13":"0",
    "str14":"0",
    "str15":"0",
    "str16":"0",
    "str17":"0",

    "str21":"0",
    "str22":"0",

    "masterNote":"string",
    "aminNote":"string",

    "str31":"0",
    "str32":"0",
    "str33":"0",
    "str34":"0",

    "str41":"0",
    "str42":"0",
    "str43":"0",
    "str44":"0",
    "str45":"0",
    "str46":"0",
    "str47":"0",
    "str48":"string",

    "str51":"0",
    "str52":"0",

    "str6":"string",

    "in":"string",
    "out":"string",
  }
  _gmc:Parameter={
    "str11":"0",
    "str12":"0",
    "str13":"string",

    "str21":"0",
    "str22":"0",
    "str23":"0",
    "str24":"0",
    
    "str31":"string",
    "str32":"0",
    "str33":"0",
    "str34":"0",

    "str41":"0",
    "str42":"string",
    "str43":"0",
    "str44":"string",
    "str45":"0",
    "str46":"0",
  //larox
    "str51":"string",
    "str52":"0",
    "str53":"0",
    "str54":"0",
    "str55":"string",
    "str56":"0",
    "str57":"0",
    "str58":"0",
    //mc100
    "str61":"0",
    "str62":"0",
    "str63":"0",
    "str64":"0",
    "str65":"0",
    "str66":"0",
    //diefenbach
    "str71":"string",
    "str72":"0",
    "str73":"0",
    "str74":"0",
    "str75":"string",
    "str76":"0",
    "str77":"0",
    "str78":"0",

    "masterNote":"string",
    "aminNote":"string",
}
  _velcCeh:Parameter={
    "str11":"0",
    "str12":"0",
    "str13":"0",
  //в/п
    "str21":"0",
    "str22":"0",
    "str23":"0",

    "str31":"0",
    "str32":"0",
    "str33":"0",

    "str41":"0",
    "str42":"0",
    "str43":"0",
    "str44":"0",
    "str45":"0",
    "str46":"0",
  //рфг
    "str51":"string",
    "str52":"string",
    "str53":"0",
    "str54":"0",
    "str55":"0",

    "str61":"0",
  //прокалка 1
    "str71":"0",
    "str72":"0",
    "str73":"0",
    "str74":"0",
  //прокалка 2
    "str81":"0",
    "str82":"0",
    "str83":"0",
    "str84":"0",

    "str91":"string",
    "str92":"0",
    "str93":"0",
    "str94":"0",
    "str95":"0",
    "str96":"0",
    "str97":"0",
  //упригр
    "str101":"0",
    "str102":"0",
  //larox
    "str111":"0",
    "str112":"0",
    "str113":"0",
    "str114":"0",
    "str115":"0",
    "str116":"0",
    "prostoy":"string",
    "masterNote":"string",
    "adminNote":"string",
    //квп 5/6
    "str121":"string",
    "str122":"string",
    "str123":"0",
    "str124":"0",
    "str125":"0",

    "str131":"0",
    "str132":"0",
    "str133":"0",
    "str134":"0",
    "str135":"0",
    "str136":"0",
    "str137":"0",
    "str138":"0",
    "str139":"0",
    "str1310":"string",
    "str1311":"0",
    "str1312":"0",
    "str1313":"0",
    "str1314":"0",
    "str1315":"0",
    //квп5
    "str141":"0",
    "str142":"0",
    "str143":"0",
    "str144":"0",
    "str145":"0",

    "str151":"string",
    "str152":"0",
    "str153":"0",
    //квп6
    "str161":"0",
    "str162":"0",
    "str163":"0",
    "str164":"string",

    "str171":"string",
    "str172":"0",
    "str173":"string",

    "str181":"0",
    "str182":"0",
    "str183":"0",
    "str184":"0",
    "str185":"0",
    "str186":"0",
    "str187":"0",

    "str191":"0",
    "str192":"0",
    "str193":"0",

    "str201":"0",
    "str202":"0",
    "str203":"0",
    "str204":"0",

    "masterNote1":"string",
    "adminNote1":"string",
  }
  _sheloch:Parameter={
    "str11":"0",
"str12":"0",

"str21":"0",
"str22":"0",
"str23":"string",

"str31":"string",
"str32":"0",
"str33":"0",

"str41":"string",
"str42":"string",
"str43":"string",

"str51":"string",
"str52":"string",
"str53":"0",
"str54":"0",
"str55":"string",

"str61":"0",
"str62":"string",
"str63":"string",

"str71":"0",
"str72":"0",
"str73":"0",

"str81":"0",
"str82":"0",
"str83":"0",
"str84":"0",
"str85":"0",
"str86":"0",

"str91":"string",
"str92":"string",

"masterNote":"string",
"adminNote":"string",
  }
  _obzhig:Parameter={
    "str11":"0",
"str12":"0",
"str13":"0",
//кс
"str21":"string",
"str22":"string",
"str23":"string",
"str24":"string",

"str31":"string",
"str32":"string",

"str41":"0",
"str42":"string",
"str43":"0",
"str44":"string",
"str45":"0",
"str46":"string",
"str47":"0",
"str48":"string",
"str49":"0",

"str51":"string",
"str52":"0",
"str53":"string",
"str54":"0",
"str55":"0",

"str61":"0",
"str62":"0",
"str63":"0",

"str71":"0",
"str72":"0",
"str73":"0",
"str74":"string",
"str75":"string",

"str81":"string",
"str82":"string",

"masterNote":"string",
"aminNote":"string",
}
  _KEC:Parameter={
    "str11":"number",
    "str12":"number",
    "str13":"number",
    "str14":"number",
    "str15":"number",
    "str16":"number",
    "str17":"number",
    "str21":"number",
    "str22":"number",
    "oc1":"number",
    "oc2":"number",
    "ABCD31":"string",
    "ABCD32":"string",
    "ABCD33":"string",
    "ABCD34":"string",
    "ABCD35":"string",
    "ABCD36":"string",
    "ABCD37":"string",
    "ABCD38":"string",
    "Iser41":"number",
    "Iser42":"number",
    "Iser43":"number",
    "Iser44":"number",
    "Iser45":"number",
    "Iser46":"number",
    "Iser47":"number",
    "Iser48":"number",
    "IIser51":"number",
    "IIser52":"number",
    "IIser53":"number",
    "IIser54":"number",
    "IIser55":"number",
    "IIser56":"number",
    "IIser57":"number",
    "IIser58":"number",
    "str61":"string",
    "str62":"string",
    "str63":"number",
    "str71":"string",
    "str72":"string",
    "str73":"string",
    "str81":"string",
    "str82":"string",
    "str83":"number",
    "str91":"string",
    "str92":"string",
    "str93":"number",
    "str94":"string",
    "str95":"number",
    "KZ1":"number",
    "KZ2":"number",
    "KZ3":"number",
    "masterNode1":"string",
    "aminNode1":"string",
    "plavStr11":"number",
    "plavStr12":"number",
    "plavStr13":"number",
    "F801":"number",
    "F802":"number",
    "F803":"number",
    "F805":"number",
    "plavStr21":"string",
    "masterNote2":"string",
    "aminNote2":"string",
    "GMO11":"number",
    "GMO12":"string",
    "GMO13":"number",
    "GMO14":"number",
    "GMO21":"string",
    "GMO22":"string",
    "GMO23":"string",
    "GMO31":"number",
    "GMO32":"number",
    "GMO33":"number",
    "GMO34":"number",
    "GMO35":"number",
    "GMO36":"string",
    "GMO37":"number",
    "GMO38":"number",
    "GMO39":"string",
    "CD1":"number",
    "CD2":"number",
    "CD3":"number",
    "CD4":"string",
    "masterNote3":"string",
    "adminNote3":"string",
  }
  _transp:Parameter={
    "transport":"string",
    "inputval":"string",
    "inputsum":"0",
    "outputval":"string",
    "outputsum":"0",
    "MP":"string",

    "str11":"0",
    "str12":"string",
    "str13":"string",
    "str14":"0",
    "str15":"string",
    "str16":"string",

    "str21":"0",
    "str22":"string",
    "str23":"string",
    "str24":"0",
    "str25":"string",
    "str26":"string",

    "str31":"0",
    "str32":"string",
    "str33":"string",
    "str34":"0",
    "str35":"string",
    "str36":"string",

    "str41":"0",
    "str42":"string",
    "str43":"string",
    "str44":"0",
    "str45":"string",
    "str46":"string",

    "sum":"0",

    "COK":"0",
    "PPF":"0",
    "dros":"0",

    "podvSostEd":"0",
    "podvSostv":"0",
    "podvSostPv":"0",
    "podvSostCe":"0",
    "podvSostPl":"0",

    "podZn":"0",
    "podZn1":"string",

    "podPogr":"0",
    "podPogr1":"string",

    "podH2SO4":"0",
    "podH2SO41":"0",
    "podH2SO42":"0",
    "podH2SO43":"0",
    "podH2SO44":"string",

    "podhod":"0",
    "podhod1":"0",
    "podhod2":"0",
    
    "podhodsum":"0",

    "noteMaster":"string",
    "noteAdmin":"string",
  }

  createDoc(){
    if(this.buffer2._transport){
      this._transp=this.buffer2._transport;
    }
    if(this.buffer2._KEC){
      this._KEC=this.buffer2._KEC;
    }
    if(this.buffer2._Obzhig){
      this._obzhig=this.buffer2._Obzhig;
    }
    if(this.buffer2._sheloch){
      this._sheloch=this.buffer2._sheloch;
    }
    if(this.buffer2._velcceh){
      this._velcCeh=this.buffer2._velcceh;
    }
    if(this.buffer2._GMC){
      this._gmc=this.buffer2._GMC;
    }
    if(this.buffer2._SKC){
      this._skc=this.buffer2._SKC;
    }
    
  }

  ngAfterViewInit(){
    
  }

  ngOnInit(){
    
    //(document.querySelector("#"+"doc") as HTMLInputElement).textContent="груженые на р/д";
    //this.appp = 
    //this.appp.textContent="груженые на р/д";// this.buffer2.htmlText;
    //this.app=document.createElement("p");
    //this.app.textContent="hello"
    //this.appp?.appendChild(this.app);
  }

}
