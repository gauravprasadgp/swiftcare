import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { QrpagePage } from '../pages/qrpage/qrpage';
import { BalancePage } from '../pages/balance/balance';
import { ProfilePage } from '../pages/profile/profile';
import { GenericPage } from '../pages/generic/generic';
import { OtaPage } from '../pages/ota/ota';
import { Storage } from '@ionic/storage';
import { LoginPage } from '../pages/login/login';
import { PanicPage } from '../pages/panic/panic';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = "login";

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen,public storage:Storage) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'My QR', component: QrpagePage },
      { title: 'My Balance', component: BalancePage },
      {title: 'My Profile', component:ProfilePage},
      {title:"Generic",component:GenericPage},
      {title:"Ota",component:OtaPage},
      {title:"HeatMap",component:PanicPage}
      
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
  logout(){
this.storage.remove("user");
this.nav.setRoot(LoginPage);
  }
}
