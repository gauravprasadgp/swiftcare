import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name:"login"
})
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
email:any;
password:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public http:Http,private storage:Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
login(){
  let body={
    email:this.email,
    password:this.password
  }
 //this.navCtrl.push("details");
this.http.post("http://infigp.in:5050/patient_login",body).subscribe((res)=>{
  console.log(res.json());
  if(res.json().status==200)
  {
    let id=100000 + Math.floor(Math.random() * 200000)
    let form={
      email:this.email,
      password:this.password,
      id:id
    }
    this.storage.set("user",JSON.stringify(form));
    this.navCtrl.push("details",{id:id,email:this.email});
  }
  else{
    alert("please check your details");
  }
})
}
signup(){
  this.navCtrl.setRoot("signup");
}
}
