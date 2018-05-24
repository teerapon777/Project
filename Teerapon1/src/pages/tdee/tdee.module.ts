import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TdeePage } from './tdee';

@NgModule({
  declarations: [
    TdeePage,
  ],
  imports: [
    IonicPageModule.forChild(TdeePage),
  ],
})
export class TdeePageModule {}
