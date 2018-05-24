import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AboutPage } from '../about/about';

/**
 * Generated class for the BmrPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bmr',
  templateUrl: 'bmr.html',
})
export class BmrPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  cal(from) {
    let height = from.height;
    let weight = from.weight;
    let year = from.year;
    let tdee = from.tdee;

    let bmr;
    let tdee_is;
    let gender = from.gender;

    if (gender == "f") {
      bmr = 66 + (13.7 * weight) + (5 * height) - (6.8 * year)
    }
    else {
      bmr = 665 + (9.6 * weight) + (1.8 * height) - (4.7 * year)
    }
    tdee_is = tdee * bmr;

    this.navCtrl.push(AboutPage, { bmr_is: bmr, tdeeis: tdee_is });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BmrPage');
  }

}
