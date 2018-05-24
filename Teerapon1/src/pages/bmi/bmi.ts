import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the BmiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bmi',
  templateUrl: 'bmi.html',
})
export class BmiPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


  cal(from) {
    let height = from.height / 100;
    let weight = from.weight;
    let bmi = weight / ((height) ^ 2);
    let str1;
    let str2;

    if (bmi <= 18.50) {
      str1 = "น้ำหนักน้อย / ผอม";
      str2 = "มากกว่าปกติ";
    }
    else if (bmi <= 22.90) {
      str1 = "ปกติ / สขภาพดี";
      str2 = "สุขภาพดี";
    }
    else if (bmi <= 24.90) {
      str1 = "ท้วม / โรคอ้วนระดับ 1 ";
      str2 = "อัตรายระดับ 1";
    }
    else if (bmi <= 29.90) {
      str1 = "อ้วน / โรคอ้วนระดับ 2";
      str2 = "อัตรายระดับ 2";
    }
    else {
      str1 = "อ้วนมาก / โรคอ้วนระดับ 3";
      str2 = "อัตรายระดับ 3";
    }
    this.navCtrl.push(HomePage, { bmi_is: bmi, str1_is: str1, str2_is: str2 });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad BmiPage');
  }

}
