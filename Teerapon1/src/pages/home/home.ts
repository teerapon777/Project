import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  bmi: string;
  str1: string;
  str2: string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }
  ngOnInit() {
    this.bmi = this.navParams.get('bmi_is');
    this.str1 = this.navParams.get('str1_is');
    this.str2 = this.navParams.get('str2_is');
  }

}
