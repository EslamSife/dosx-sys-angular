import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Invoice} from '../common/model/invoice.model';
import {map} from 'rxjs/operators';

@Injectable()
export class InvoiceService {

  invoiceSelected = new EventEmitter<Invoice>();

  private baseUrl = 'http://localhost:8080/api/invoices';

  /*

  private invoices: Invoice[] = [
    new Invoice(
      'Tasty Schnitzel',
      100,
      200,
    ),
    new Invoice('Big Fat Burger',
      300,
      500,
    )
  ];


  constructor() {
  }


  getInvoices() {
    return this.invoices.slice();
  }
}

*/



  constructor(private httpClient: HttpClient) {
  }






   // get real data from database
  getInvoiceList(): Observable<Invoice[]> {
    return this.httpClient.get<GetResponse>(this.baseUrl).pipe(
      map(response => response._embedded.invoices)
    );
  }
}


interface GetResponse {
  _embedded: {
    invoices: Invoice[];
  };
}

