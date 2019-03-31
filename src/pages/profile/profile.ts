import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { Storage } from '@ionic/storage';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
items=[];
a=[];
  constructor(public navCtrl: NavController, public navParams: NavParams,public http:Http,private storage:Storage) {
    this.storage.get('user').then((val) => {
      if(val!=null){
      let user=JSON.parse(val)
      let body={
        id:user.id
      }
 this.http.post("http://infigp.in:5050/profile",body).subscribe(res=>{
   console.log(res.json());
   this.items=res.json();
   })
  }
})
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

}
