import {Component, Input, OnInit} from '@angular/core';
import {Invoice} from '../../../common/model/invoice.model';
import {InvoiceService} from '../../../services/invoice.service';

@Component({
  selector: 'app-invoice-detail',
  templateUrl: './invoice-detail.component.html',
  styleUrls: ['./invoice-detail.component.css']
})
export class InvoiceDetailComponent implements OnInit {


  @Input() invoice: Invoice;

  constructor(private invoiceService: InvoiceService) { }

  ngOnInit() {
  }

  onAddToShoppingList() {
  }

}
