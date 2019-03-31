import { Component } from '@angular/core';
import {NavController, NavParams } from 'ionic-angular';
import { analyzeAndValidateNgModules } from '@angular/compiler';

/**
 * Generated class for the OtaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-ota',
  templateUrl: 'ota.html',
})
export class OtaPage {
ind:any;
nam:any;
  ota=[
    {
      med:"Ibuprofen, Acetaminophen"
    },
    {
      med:"Aspirin, Naproxen"
    },
    {
      med:"Acetominaphen"
    },
    {
      med:"Vicks44, Robitussen"
    },
    {
      med:"Crocin, Paracetamol"
    },
    {
      med:"Soframycin, Betadine"
    }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OtaPage');
  }

  search()
  {
    this.nam=this.ota[this.ind].med;
  }



}
