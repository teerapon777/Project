import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { AlertMessage } from '../../models/msg';
import { AuthenServiceProvider } from '../../providers/authen-service/authen-service';
import { ListProductPage } from '../list-product/list-product';

/**
 * Generated class for the InsertProductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-insert-product',
  templateUrl: 'insert-product.html',
})
export class InsertProductPage {

  alertMSG: AlertMessage;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController,
    private authenServiceProvider: AuthenServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InsertProductPage');
  }
  save(from) {
    let productname = from.name;
    let productccategory = from.category;
    let productGMP = from.standard;
    let productNum = from.number

    let loader = this.loadingCtrl.create({
      content: "กำลังบันทึกข้อมูล....."
    });
    loader.present();
    this.authenServiceProvider.signup(productname, productccategory, productGMP, productNum).subscribe(
      (alertMSG: AlertMessage) => {
        this.alertMSG = alertMSG;

        if (this.alertMSG.status == 'ok') {
          let alert = this.alertCtrl.create({
            title: this.alertMSG.message,
            buttons: ['ตกลง']
          });
          alert.present();
          this.navCtrl.setRoot(ListProductPage);
        } else if (this.alertMSG.status == 'no') {
          let alert = this.alertCtrl.create({
            title: this.alertMSG.message,
            buttons: ['ตกลง']
          });
          alert.present();
        } else {
          let alert = this.alertCtrl.create({
            title: this.alertMSG.message,
            buttons: ['ตกลง']
          });
          alert.present();
        }
      }, (error) => {
        console.log(error);
        loader.dismiss();
      }, () => {
        loader.dismiss();
      });
  }

}
