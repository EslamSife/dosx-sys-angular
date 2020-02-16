import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Invoice} from '../common/invoice';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService  {

  invoicesAddedStatic = [
    {
      total: 533,
      drinksTotal: 20
    }
  ];

  private baseUrl = 'http://localhost:8080/api/invoices';

  constructor(private httpClient: HttpClient) { }

  addInvoice(total: number, drinksTotal: number) {
    this.invoicesAddedStatic.push({total, drinksTotal});
  }

  getInvoiceList(): Observable<Invoice[]>  {
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
