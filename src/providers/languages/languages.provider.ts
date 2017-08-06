import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


/*
  Generated class for the LanguagesProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class LanguagesProvider {
  languages: any[] = [];
  constructor(public http: Http) {
    console.log('Hello LanguagesProvider Provider');
    this.http.get('https://splinxs.com/fullLangs.json').map(res => res.json()).subscribe(data => {
      this.languages = data;

    });
  }

  /*
  getLanguages() {
    console.log("getting languages")


    return new Promise(resolve => {
      this.http.get('https://splinxs.com/fullLangs.json')
        .map(res => res.json())
        .subscribe(data => {
          console.log(data);
          resolve(data);

        });
    });
  }
  */

}
