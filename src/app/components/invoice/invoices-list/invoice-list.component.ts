import { Component, OnInit } from '@angular/core';
import {InvoiceService} from '../../../services/invoice.service';
import {Invoice} from '../../../common/invoice';


@Component({
  selector: 'app-invoice-list',
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.css'],
})
export class InvoiceListComponent implements OnInit {


  invoicesAddedStatic: {total: number, drinksTotal: number} [] = [];

  invoices: Invoice[];
  constructor(private invoiceService: InvoiceService) { }

  ngOnInit() {
    this.listInvoices();
  }


  addInvoice(totalUserInput, drinksTotalUserInput) {
    this.invoicesAddedStatic.push({total: totalUserInput, drinksTotal: drinksTotalUserInput});
  }

  private listInvoices() {
    this.invoiceService.getInvoiceList().subscribe(
      data => {
        this.invoices = data;
      }
    );
  }
}
