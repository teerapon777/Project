import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { Products } from '../../models/product';
import { Subscription } from 'rxjs/Subscription';
import { AuthenServiceProvider } from '../../providers/authen-service/authen-service';

/**
 * Generated class for the SelectProductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-select-product',
  templateUrl: 'select-product.html',
})
export class SelectProductPage {

  product: Products[];
  subscription: Subscription;

  text_fill: string;
  text: string;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private loadingCtrl: LoadingController,
    public productServer: AuthenServiceProvider) {
  }

  getDataPorduce() {
    let txt = this.navParams.get('text_is');
    this.subscription = this.productServer.getDataPorduce(txt).subscribe(
      (product: Products[]) => this.product = product
    );
  }

  ionViewWillEnter() {
    this.getDataPorduce();
  }

  ionViewWillLeave() {
    this.subscription.unsubscribe();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SelectProductPage');
  }
  ngOnInit() {
    this.text = this.navParams.get('text_is');
  }

}
