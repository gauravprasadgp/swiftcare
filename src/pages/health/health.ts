import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';

/**
 * Generated class for the HealthPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name:"health"
})
@Component({
  selector: 'page-health',
  templateUrl: 'health.html',
})
export class HealthPage {
bg:any;
heart:any;
pd:any;
height:any;
weight:any
bmi:any;
allergies:any;
id:any;
constructor(public navCtrl: NavController, public navParams: NavParams,private http:Http) {
this.id=this.navParams.get('id');  
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad HealthPage');
  }
submit(){
  let body={
    bg:this.bg,
    pd:this.pd,
    heart:this.heart,
    weight:this.weight,
    bmi:this.bmi,
    allergies:this.allergies,
    height:this.height,
    id:this.id
  }
this.http.post("http://infigp.in:5050/health_reg",body).subscribe(res=>{
  console.log(res.json());
  if(res.json().status==200)
  {
    this.navCtrl.setRoot('doctor',{id:this.id});

  }
  else
  {
    alert("Try again");
  }
})

}
}
