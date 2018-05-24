import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Products } from '../../models/product';
import { Subscription } from 'rxjs/Subscription';
import { AuthenServiceProvider } from '../../providers/authen-service/authen-service';

/**
 * Generated class for the ListProductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list-product',
  templateUrl: 'list-product.html',
})
export class ListProductPage {

  listproduct: Products[];
  subscription: Subscription;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public usersServer: AuthenServiceProvider) {
  }

  private getData() {
    this.subscription = this.usersServer.getAllData().subscribe(
      (listproduct: Products[]) => this.listproduct = listproduct
    );
  }

  ionViewWillEnter() {
    this.getData();
  }

  ionViewWillLeave() {
    this.subscription.unsubscribe();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListProductPage');
  }

}
