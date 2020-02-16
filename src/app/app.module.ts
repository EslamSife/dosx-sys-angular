import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InvoiceListComponent } from './components/invoice/invoices-list/invoice-list.component';
import {HttpClientModule} from '@angular/common/http';
import {InvoiceService} from './services/invoice.service';
import { NewInvoiceComponent } from './components/invoice/new-invoice/new-invoice.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    InvoiceListComponent,
    NewInvoiceComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [InvoiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
