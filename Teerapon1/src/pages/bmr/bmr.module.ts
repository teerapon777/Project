import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BmrPage } from './bmr';

@NgModule({
  declarations: [
    BmrPage,
  ],
  imports: [
    IonicPageModule.forChild(BmrPage),
  ],
})
export class BmrPageModule {}
