import { Component, OnInit } from '@angular/core';
import {InvoiceService} from '../../services/invoice.service';
import {Invoice} from '../../common/invoice';

@Component({
  selector: 'app-invoice-list',
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.css']
})
export class InvoiceListComponent implements OnInit {


  invoices: Invoice[];
  constructor(private invoiceService: InvoiceService) { }

  ngOnInit() {
    this.listInvoices();
  }


  private listInvoices() {
    this.invoiceService.getInvoiceList().subscribe(
      data => {
        this.invoices = data;
      }
    );
  }
}
