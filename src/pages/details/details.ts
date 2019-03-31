import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { QrpagePage } from '../qrpage/qrpage';
import { Http } from '@angular/http';
import { Geolocation } from '@ionic-native/geolocation';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the DetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name:"details"
})
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {
id:any;
sex:any;
mobile:any;
latitute:any;
longitute:any;
dob:any;
address:any;
age:any;
email;
  constructor(public navCtrl: NavController, public navParams: NavParams,public http:Http,private geolocation: Geolocation,public storage:Storage) {
 
  this.email=this.navParams.get('email');
  if(this.email=="prasadgaurav34@gmail.com")
  {
    this.id="011216";
  }
  else{
    this.id=this.navParams.get('id');
  }
  this.geolocation.getCurrentPosition().then((resp) => {
    // resp.coords.latitude
    // resp.coords.longitude
    this.latitute=resp.coords.latitude;
    this.longitute=resp.coords.longitude;

   }).catch((error) => {
     console.log('Error getting location', error);
   });
   
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsPage');
  }
submit(){
  let body={
   email:this.email,
 address:this.address,
    mobile:this.mobile,
    age:this.age,
     sex:this.sex,
   latitute:this.latitute,
  longitute:this.longitute,
 dob:this.dob,
 id:this.id
  }
  console.log(body);

 this.http.post("http://infigp.in:5050/patient_reg2",body).subscribe((res)=>{
   console.log(res.json());
   if(res.json().status==200)
   {
    this.navCtrl.push(QrpagePage,{id:this.id});
   }
   else
   {
   alert("Try again");
   }
 })
 
  
}
}
