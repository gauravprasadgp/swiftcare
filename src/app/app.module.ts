import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';
import {HttpModule} from '@angular/http';
import { QRCodeModule } from 'angularx-qrcode';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { Geolocation } from '@ionic-native/geolocation';
import { IonicStorageModule } from '@ionic/storage';
import { QrpagePage } from '../pages/qrpage/qrpage';
import { BalancePage } from '../pages/balance/balance';
import { ProfilePage } from '../pages/profile/profile';
import { GenericPage } from '../pages/generic/generic';
import { OtaPage } from '../pages/ota/ota';
import { SMS } from '@ionic-native/sms';
import { PanicPage } from '../pages/panic/panic';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    QrpagePage,
    BalancePage,
    ProfilePage,
    GenericPage,
    OtaPage,
    PanicPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    NgxQRCodeModule,
    QRCodeModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    QrpagePage,
    BalancePage,
    ProfilePage,
    GenericPage,
    OtaPage,
    PanicPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    QRScanner,
    Geolocation,
    SMS,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
