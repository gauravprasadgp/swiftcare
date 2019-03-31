import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { NgxQRCodeModule } from 'ngx-qrcode2';


/**
 * Generated class for the QrpagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-qrpage',
  templateUrl: 'qrpage.html',
})
export class QrpagePage {
data=null;
qrcode=null;
id=null;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.id=this.navParams.get('id');
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QrpagePage');
  }
  getcode(){
    this.qrcode=this.id;
  }

next()
{
  this.navCtrl.push("health",{id:this.id});
}
}
