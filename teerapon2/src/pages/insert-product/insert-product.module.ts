import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InsertProductPage } from './insert-product';

@NgModule({
  declarations: [
    InsertProductPage,
  ],
  imports: [
    IonicPageModule.forChild(InsertProductPage),
  ],
})
export class InsertProductPageModule {}
