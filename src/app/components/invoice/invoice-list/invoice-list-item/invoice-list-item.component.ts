import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Invoice} from '../../../../common/model/invoice.model';
import {InvoiceService} from '../../../../services/invoice.service';

@Component({
  selector: 'app-invoice-list-item',
  templateUrl: './invoice-list-item.component.html',
  styleUrls: ['./invoice-list-item.component.css']
})
export class InvoiceListItemComponent implements OnInit {

  @Input()
  invoice: Invoice;

  constructor(private invoiceService: InvoiceService) { }

  ngOnInit() {
  }

  onSelected() {
    this.invoiceService.invoiceSelected.emit(this.invoice);
  }



}
