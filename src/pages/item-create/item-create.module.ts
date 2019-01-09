import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { ItemCreatePage } from './item-create';

@NgModule({
  declarations: [
    ItemCreatePage,
  ],
  imports: [
    IonicPageModule.forChild(ItemCreatePage)
  ]
})
export class ItemCreatePageModule { }
