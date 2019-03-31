import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';

/**
 * Generated class for the GenericPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-generic',
  templateUrl: 'generic.html',
})
export class GenericPage {
  nam:any;
  query:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public http:Http) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GenericPage');
  }
  search()
  {
    this.http.get("https://rxnav.nlm.nih.gov/REST/Prescribe/drugs?name="+this.query).subscribe((res)=>{
      console.log(res.json());
      this.nam=res.json().drugGroup.conceptGroup[res.json().drugGroup.conceptGroup.length-1].conceptProperties[0].name;

    });
    
  }

}
