import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Products } from '../../models/product';
import { Observable } from 'rxjs/Observable';
import { AlertMessage } from '../../models/msg';

/*
  Generated class for the AuthenServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthenServiceProvider {

  apiUrl: string = "http://localhost/test/crud_product.php";

  constructor(public http: HttpClient) {
    console.log('Hello AuthenServiceProvider Provider');
  }
  getAllData(): Observable<Products[]> {
    const header = { 'Content-Type': 'application/json' };
    let data = {
      'cmd': 'select',
    };
    return this.http.post<Products[]>(this.apiUrl, data, { headers: header })
  }
  getDataPorduce(text: string): Observable<Products[]> {
    const header = { 'Content-Type': 'application/json' };
    let data = {
      'cmd': 'select_product',
      'text': text
    };
    return this.http.post<Products[]>(this.apiUrl, data, { headers: header })
  }
  signup(name: string, category: string, standard: string, number: string): Observable<AlertMessage> {
    const header = { 'Content-Type': 'application/json' };
    let data = {
      'cmd': 'insert',
      'name': name,
      'category': category,
      'GMP': standard,
      'number': number
    };
    return this.http.post<AlertMessage>(this.apiUrl, data, { headers: header })
  }

}
