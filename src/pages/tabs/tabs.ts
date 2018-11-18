import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {BusquedaPage, ListaPersonasPage} from "../index.paginas";
import {PersonasProvider} from "../../providers/personas/personas";
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  tab_lista=ListaPersonasPage;
  tab_buscar=BusquedaPage;


  constructor(public navCtrl: NavController, public navParams: NavParams,
              public _pp: PersonasProvider) {
              this._pp.traer_lista_usuarios();
  }

}
