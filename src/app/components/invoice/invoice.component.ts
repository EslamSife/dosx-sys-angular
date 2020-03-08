import { Component, OnInit } from '@angular/core';
import {Invoice} from '../../common/model/invoice.model';
import {InvoiceService} from '../../services/invoice.service';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css'],
  providers: [InvoiceService]
})
export class InvoiceComponent implements OnInit {

  selectedInvoice: Invoice;

  constructor(private invoiceService: InvoiceService) { }

  ngOnInit() {
    this.invoiceService.invoiceSelected
      .subscribe(
        (invoice: Invoice) => {
          this.selectedInvoice = invoice;
        }
      );
  }

}
