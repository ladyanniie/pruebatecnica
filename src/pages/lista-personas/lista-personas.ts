import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {PersonasProvider} from "../../providers/personas/personas";
import {InformacionPersonaPage} from "../index.paginas";
@Component({
  selector: 'page-lista-personas',
  templateUrl: 'lista-personas.html',
})
export class ListaPersonasPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public _pp: PersonasProvider) {
  }
  ver_detalle_persona(item){
    console.log(item.rut);
    this._pp.checkRut(item.rut);
    this.navCtrl.push(InformacionPersonaPage, {item});
    
  }

}
