import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SelectProductPage } from '../select-product/select-product';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  select(from) {
    let text = from.txt;
    this.navCtrl.push(SelectProductPage, { text_is: text });
  }

}
