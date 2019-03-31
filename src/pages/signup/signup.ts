import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name:"signup"
})
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
name:any;
email:any;
password:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public http:Http) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }
login(){
  let body={
    name:this.name,
    email:this.email,
    password:this.password
  }
  this.http.post("http://infigp.in:5050/patient_reg",body).subscribe(res=>{
    if(res.json().status==200)
    {
      this.navCtrl.setRoot('login');
    }
    else
    alert("Try Again");
  })
}
}
