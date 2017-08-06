import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LangTestPage } from './lang-test';

@NgModule({
  declarations: [
    LangTestPage,
  ],
  imports: [
    IonicPageModule.forChild(LangTestPage),
  ],
})
export class LangTestPageModule {}
