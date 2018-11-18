import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {URL_SERVICIOS} from "../../config/url.servicios";
@Injectable()   
export class PersonasProvider {
  lista_usuarios:any=[];
  lista_usuarios_busqueda:any=[];
  validar_rut:string='';
  constructor(public http: HttpClient) {
  }
  traer_lista_usuarios(){
   let url= URL_SERVICIOS;
   this.http.get(url).subscribe(resp=>{
     let respuesta= resp;
     this.lista_usuarios=respuesta;
     console.log(this.lista_usuarios);
     this.lista_usuarios_busqueda=respuesta;
   });
  }
   checkRut(rut){
     this.validar_rut='';
    let valor = rut.replace('-','');
    let cuerpo = valor.slice(0,-1);
    let dv = valor.slice(-1).toUpperCase();
   
    rut = cuerpo + '-'+ dv
    if(cuerpo.length < 7) { this.validar_rut="numero de digitos no valido";return false;}
    let suma = 0;
    let multiplo = 2;
    for(let i=1;i<=cuerpo.length;i++) {
        let index = multiplo * valor.charAt(cuerpo.length - i);
        suma = suma + index;
        if(multiplo < 7) { multiplo = multiplo + 1; } else { multiplo = 2; }
  
    }
    let dvEsperado = 11 - (suma % 11);
    dv = (dv == 'K')?10:dv;
    dv = (dv == 0)?11:dv;
    if(dvEsperado != dv){this.validar_rut="no coincide el digito verificador con el cuerpo del rut.";return false;}
  }
}
