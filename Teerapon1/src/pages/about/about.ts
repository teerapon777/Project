import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  bmr: string;
  tdee: string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }
  ngOnInit() {
    this.bmr = this.navParams.get('bmr_is');
    this.tdee = this.navParams.get('tdeeis');
  }
}
