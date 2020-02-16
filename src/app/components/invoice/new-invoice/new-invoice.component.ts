import { Component, OnInit } from '@angular/core';
import {InvoiceService} from '../../../services/invoice.service';

@Component({
  selector: 'app-new-invoice',
  templateUrl: './new-invoice.component.html',
  styleUrls: ['./new-invoice.component.css']
})
export class NewInvoiceComponent implements OnInit {


  invoicesAddedStatic: {total: number, drinksTotal: number} [] = [];
  total = 0;
  drinksTotal = 0;
  constructor(private invoiceService: InvoiceService) { }

  ngOnInit() {
    this.invoicesAddedStatic = this.invoiceService.invoicesAddedStatic;
  }




  onCreateInvoice() {

  }


  onUpdateTotalInvoice(event: Event) {
    this.total = Number((event.target as HTMLInputElement).value);
  }

  onUpdateDrinksTotal(event: Event) {
    this.drinksTotal = Number((event.target as HTMLInputElement).value);
  }

}
