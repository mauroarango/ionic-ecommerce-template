import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { CurrencyPipe } from '@angular/common'

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { HistoriaPage } from '../pages/historia/historia';
import { ProductosPage } from '../pages/productos/productos';
import { DescripcionPage } from '../pages/descripcion/descripcion';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    HistoriaPage,
    ProductosPage,
    DescripcionPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    HistoriaPage,
    ProductosPage,
    DescripcionPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
