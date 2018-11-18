import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {PersonasProvider} from "../../providers/personas/personas";
import {InformacionPersonaPage} from "../index.paginas";
@Component({
  selector: 'page-busqueda',
  templateUrl: 'busqueda.html',
})
export class BusquedaPage {
  items:any[]=[];
  constructor(public navCtrl: NavController, public navParams: NavParams, public _pp: PersonasProvider) {
    this.initializeItems();
  }
  initializeItems() {
    this._pp.traer_lista_usuarios();
  }
  getItems(ev: any) {
    const val = ev.target.value;
    if (val && val.trim() != '') {
      this._pp.lista_usuarios_busqueda = this._pp.lista_usuarios_busqueda.filter((item) => {
        return (item.nombre.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })

    }else{
      this.initializeItems();
    }
  }
  ver_detalle_persona(item){
    this._pp.checkRut(item.rut);
    this.navCtrl.push(InformacionPersonaPage, {item});
  }
}
