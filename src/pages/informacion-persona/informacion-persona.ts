import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, DateTime } from 'ionic-angular';
import {PersonasProvider} from "../../providers/personas/personas";

@Component({
  selector: 'page-informacion-persona',
  templateUrl: 'informacion-persona.html',
})
export class InformacionPersonaPage {
  datos_personales:any={};
  fecha:any='';
  validacion_fecha:string='';
  constructor(public navCtrl: NavController, public navParams: NavParams,
             public _pp: PersonasProvider) {
    this.datos_personales= this.navParams.get("item");
    this.fecha=this.datos_personales.fechaNacimiento;
    this.fecha= this.fecha.split("/");
    let fecha_ordenada=this.fecha[2]+'/'+this.fecha[1]+'/'+this.fecha[0];
    try{
    let date = new Date(fecha_ordenada).toISOString();
    this.validacion_fecha='';
    if(this.fecha[2]==0){
      this.validacion_fecha="Fecha erronea";
    }
    }catch(e){
      this.validacion_fecha="Fecha erronea";
    }
  }
}
