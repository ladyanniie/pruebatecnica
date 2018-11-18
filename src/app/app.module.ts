import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, Tab } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {TabsPage, BusquedaPage, InformacionPersonaPage,ListaPersonasPage} from "../pages/index.paginas";
import { PersonasProvider } from '../providers/personas/personas';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    BusquedaPage,
    InformacionPersonaPage,
    ListaPersonasPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{
      platforms: {
          ios: {
              backButtonText: 'Atras'
          }
      }
  }),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    BusquedaPage,
    InformacionPersonaPage,
    ListaPersonasPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PersonasProvider
  ]
})
export class AppModule {}
