import { Component, ViewChild } from '@angular/core';
import { ConverterService } from './converter.service';
import { Converter } from './converter'
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/Rx';
import { NgbTypeahead } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, Validators, FormControl, ValidatorFn, AbstractControl } from '@angular/forms';


const currencies: string[] = ["EUR", "AUD", "BGN", "BRL", "CAD", "CHF", "CNY", "CZK", "DKK", "GBP", "HKD", "HRK", "HUF", "IDR", "ILS", "INR", "ISK", "JPY", "KRW", "MXN", "MYR", "NOK", "NZD", "PHP", "PLN", "RON", "RUB", "SEK", "SGD", "THB", "TRY", "USD", "ZAR"]


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ConverterService]
})
export class AppComponent {
  toBeConverted: Converter = new Converter();

  currencyForm: FormGroup;

  
  @ViewChild('instance') instance: NgbTypeahead;
  
  constructor(private ConverterService: ConverterService, fb: FormBuilder) {
    this.currencyForm = fb.group({
      "toBeConverted.baseCurrency": ['', Validators.required, this.validCurrency],
      "toBeConverted.baseAmount": ['', Validators.required, this.validAmount],
      "toBeConverted.targetCurrency": ['', Validators.required, this.validCurrency],
      "toBeConverted.targetAmount": ['', {disabled: true}],
    })
  }

  convertCurrency(form: any) {
    console.log("FORM: ", form);
    // console.log("baseCurrency: ", form.control["toBeConverted.baseCurrency"]);

    if (!form.valid) {
      console.log("Invalid Form");
      
      return;
    }
    
    this.ConverterService.convertCurrency(this.toBeConverted).subscribe( (convertedResponse) => {
      this.toBeConverted = convertedResponse;
    });
  }

  validCurrency(c: AbstractControl): Observable<{ valid: boolean }> {
    return Observable.of(c).map( (c) => {
      if (currencies.indexOf(c.value) > -1) {
        return null;
      }
      
  
      return {valid: false}
    })
  }

  validAmount(c: AbstractControl): Observable<{ valid: boolean }> {
    return Observable.of(c).map( (c) => {
      return c.value > 0 ? null : {valid: false}
    })
  }

  searchCurrencies = (text$: Observable<string>) =>
    text$
      .debounceTime(200)
      .distinctUntilChanged()
      .map(term => currencies.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10));


}


