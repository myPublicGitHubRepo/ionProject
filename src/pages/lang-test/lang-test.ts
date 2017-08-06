import { Component } from '@angular/core';
import { IonicPage, ViewController } from 'ionic-angular';
import { LanguagesProvider } from '../../providers/languages/languages.provider';


/**
 * Generated class for the LangTestPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lang-test',
  templateUrl: 'lang-test.html',
})
export class LangTestPage {
  languages: any[] = [];
  constructor(public viewCtrl: ViewController, public languagesProvider: LanguagesProvider) {


    console.log(languagesProvider);
    console.log(languagesProvider.languages);

    this.languages = languagesProvider.languages;



  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LangTestPage');


  }
  dismiss() {
    this.viewCtrl.dismiss();
  }

}
