import { Injectable } from '@angular/core';
import { Converter } from "./converter";
import { environment } from 'environments/environment';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { URLSearchParams } from '@angular/http';
import 'rxjs/Rx';



const API_URL = environment.apiUrl;
@Injectable()
export class ConverterService {

  


  constructor(
    private http: Http
  ) { }


  public convertCurrency(toBeConverted : Converter): Observable<Converter> {
    let params = new URLSearchParams();
    params.set("baseCurrency", toBeConverted.baseCurrency);
    params.set("targetCurrency", toBeConverted.targetCurrency);
    params.set("baseAmount", toBeConverted.baseAmount.toString());

    return this.http
      .get(API_URL + '/convert', {search: params})
      .map(response => {
        const converter = response.json();
        return converter;
      })
      .catch(this.handleError);
  }

  private handleError (error: Response | any) {
    console.error('ConverterService::handleError', error);
    return Observable.throw(error);
  }

}
