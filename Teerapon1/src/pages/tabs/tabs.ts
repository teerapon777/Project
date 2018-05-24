import { Component } from '@angular/core';


import { BmiPage } from '../bmi/bmi';
import { BmrPage } from '../bmr/bmr';
import { TdeePage } from '../tdee/tdee';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = BmiPage;
  tab2Root = BmrPage;
  tab3Root = TdeePage;


  constructor() {

  }
}
