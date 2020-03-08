import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {InvoiceService} from '../../../services/invoice.service';
import {Invoice} from '../../../common/model/invoice.model';


@Component({
  selector: 'app-invoice-list',
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.css'],
})
export class InvoiceListComponent implements OnInit {

  invoices: Invoice[];


  constructor(private invoiceService: InvoiceService) { }

  ngOnInit() {
    // this.invoices = this.invoiceService.getInvoices();
    this.listInvoices();
  }

  // get real data from database
  private listInvoices() {
    this.invoiceService.getInvoiceList().subscribe(
      data => {
        this.invoices = data;
      }
    );
  }



}
