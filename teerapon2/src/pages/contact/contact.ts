import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InsertProductPage } from '../insert-product/insert-product';
import { ListProductPage } from '../list-product/list-product';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController) {

  }
  insert() {
    this.navCtrl.push(InsertProductPage);
  }

  list_product() {
    this.navCtrl.push(ListProductPage);
  }

}
