import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Toast, ToastController } from 'ionic-angular';
import { Http } from '@angular/http';
import { SMS } from '@ionic-native/sms';
import { Geolocation } from '@ionic-native/geolocation';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the DoctorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name:"doctor"
})
@Component({
  selector: 'page-doctor',
  templateUrl: 'doctor.html',
})
export class DoctorPage {
doctors=[
 { 
   "name":'Dr anand sharma',
  "degree":'MBBS,MD',
  "id":1
 },
 { 
   "name":'Dr krishnan',
  "degree":'MBBS,MD',
  "id":2
 },
 { 
   "name":'Dr ram mohan',
  "degree":'MBBS,MD',
  "id":3
 },
]
id:any;
latitute:any;
longitute:any;

  constructor(public navCtrl: NavController,private sms: SMS, public navParams: NavParams,public alertCtrl:AlertController,public storage:Storage,public http:Http,public toastCtrl: ToastController,public geolocation:Geolocation) {
  this.id=this.navParams.get('id');
  this.storage.get('user').then((val) => {
    if(val!=null){
    let user=JSON.parse(val)
    let body={
      id:user.id
    }
  this.sms.hasPermission();
  this.geolocation.getCurrentPosition().then((resp) => {
    // resp.coords.latitude
    // resp.coords.longitude
    this.latitute=resp.coords.latitude;
    this.longitute=resp.coords.longitude;

   }).catch((error) => {
     console.log('Error getting location', error);
   }); 
  }}) 
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad DoctorPage');
  }
appoint(d){
let alert=this.alertCtrl.create()
  alert.setTitle("Select the time slot")
  alert.addInput({
    type: 'radio',
    label: '8am-11am',
    value: '0',
    checked: true
  });
  alert.addInput({
    type: 'radio',
    label: '12pm-3pm',
    value: '1',
   // checked: true
  });
  alert.addInput({
    type: 'radio',
    label: '4pm-7pm',
    value: '2',
   // checked: true
  });
  alert.addInput({
    type: 'radio',
    label: '8pm-11pm',
    value: '3',
   // checked: true
  });

  alert.addButton('Cancel');
  alert.addButton({
    text: 'OK',
    handler: data => {
      let body={
        doctor:d,
        slot:data,
        id:this.id
      }
      this.http.post("http://infigp.in:5050/slot",body).subscribe(res=>{
        console.log(res.json());
        if(res.json().status==200)
        {
         this.toastalert();
        }
        else{
        //  alert("Appointment was added successfully");
        this.toastalert();
        }
      })
      console.log(data);
    }
  });
  alert.present();

}
details(d){
this.navCtrl.push("pdet",{det:d});
}


panic(){
  this.sms.send('9952080074', 'Your Friend needs your help, navigate to his location ASAP.  https://www.google.co.in/maps/dir//'+this.latitute+','+this.longitute+'');

}
toastalert(){
  const toast = this.toastCtrl.create({
    message: 'Appointment was added successfully amount reduced ₹10',
    duration: 3000
  });
  toast.present();
  
}
}
