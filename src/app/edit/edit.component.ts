
import { Component, OnInit ,EventEmitter, Output, Input, TemplateRef, ContentChild, HostBinding, HostListener} from '@angular/core';

import {Buffer} from '../model/buffer';
import {FormControl} from '@angular/forms';

import {DispLog,Parameter} from '../model/modelFormInput';
import {FormService} from "../form.service";

interface deposited{
  F801: number,
  F802: number,
  F803: number,
  F805: number
}

interface select{
  start:boolean,
  end:boolean,
  continue:boolean
}


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
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
    "inputval":"stringaaa",
    "inputsum":"string",
    "outputval":"string",
    "outputsum":"string",
    "MP":"string",

    "str11":"string",
    "str12":"string",
    "str13":"string",
    "str14":"string",
    "str15":"string",
    "str16":"string",

    "str21":"string",
    "str22":"string",
    "str23":"string",
    "str24":"string",
    "str25":"string",
    "str26":"string",

    "str31":"string",
    "str32":"string",
    "str33":"string",
    "str34":"string",
    "str35":"string",
    "str36":"string",

    "str41":"string",
    "str42":"string",
    "str43":"string",
    "str44":"string",
    "str45":"string",
    "str46":"string",

    "sum":"string",

    "COK":"string",
    "PPF":"string",
    "dros":"string",

    "podvSostEd":"string",
    "podvSostv":"string",
    "podvSostPv":"string",
    "podvSostCe":"string",
    "podvSostPl":"string",

    "podZn":"string",
    "podZn1":"string",

    "podPogr":"string",
    "podPogr1":"string",

    "podH2SO4":"string",
    "podH2SO41":"string",
    "podH2SO42":"string",
    "podH2SO43":"string",
    "podH2SO44":"string",

    "podhod":"string",
    "podhod1":"string",
    "podhod2":"string",
    "podhodsum":"string",

    "noteMaster":"string",
    "noteAdmin":"string",
  }
  
  
  deposite: deposited={
    F801: 0,
    F802: 0,
    F803: 0,
    F805: 0
  };
  
  selectedProc:string|undefined;// начали закончили продолжили
  selecteTab: string="Transport";// текущаяя форма
  public selected = new FormControl(0);

  sel: select={start:false, continue: true, end: false};

  title = 'edit';
  
  
  @Input() buffer1: Buffer={
    htmlText: "document.documentElement.innerHTML",
    formType: ""
  }
  @Input() forms!: DispLog[];
  
  @Output() buffer1Change = new EventEmitter<Buffer>();
  @Output() createdDoc = new EventEmitter<Buffer>();
  @Output() postDoc = new EventEmitter<Buffer>();

  constructor(){}

  onKey(event:Event){
    document.getElementById((event.target as HTMLInputElement).id)?.setAttribute("value",(event.target as HTMLInputElement).value);
  }

  save(){
    switch(this.selected.value) { 
      case 0: { 
        this.selecteTab="Transport"
        this.buffer1._transport=this._transp;
         break; 
      }   
      case 1: { 
        this.selecteTab="KEC"
        this.buffer1._KEC=this._KEC;
         break; 
      } 
      case 2: { 
        this.selecteTab="Obzig"
        this.buffer1._Obzhig=this._obzhig;
        break; 
      } 
      case 3: { 
        this.selecteTab="Sheloch"
        this.buffer1._sheloch=this._sheloch
        break; 
      } 
      case 4: { 
        this.selecteTab="Velc"
        this.buffer1._velcceh=this._velcCeh
        break; 
      } 
      case 5: { 
        this.selecteTab="GMC"
        this.buffer1._GMC=this._gmc
        break; 
      } 
      case 6: { 
        this.selecteTab="SKC"
        this.buffer1._SKC=this._skc
        break; 
      }
    }
    this.buffer1.htmlText="";
    let tabEl=document.getElementById(this.selecteTab);

    this.buffer1.htmlText+= tabEl?.innerHTML;
    this.buffer1.formType=this.selecteTab;

    this.buffer1Change.emit(this.buffer1);
    this.createdDoc.emit();
    
  }

  checkSelect(option: string){
    switch(option) { 
      case "Продолжили": { 
         this.sel={start:false, continue: true, end: false};
         break; 
      } 
      case "Начали": { 
        this.sel={start: true, continue: false, end: false};
         break; 
      } 
      case "Закончили": { 
        this.sel={start: false, continue: false, end: true};
         break; 
      } 
    }
  }

  ngOnInit(){
    this._transp= (this.buffer1._transport as Parameter)
    this._skc=(this.buffer1._SKC as Parameter);
    this._gmc=(this.buffer1._GMC as Parameter);
    this._velcCeh=(this.buffer1._velcceh as Parameter);
    this._sheloch=(this.buffer1._sheloch as Parameter);
    this._obzhig=(this.buffer1._Obzhig as Parameter);
    this._KEC=(this.buffer1._KEC as Parameter);
    this.selectedProc="Продолжили";
    this.sel={start:false, continue: true, end: false};
  }
}
