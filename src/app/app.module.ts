import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InvoiceListComponent } from './invoice/invoice-list/invoice-list.component';
import {HttpClientModule} from '@angular/common/http';
import {InvoiceService} from './services/invoice.service';

@NgModule({
  declarations: [
    AppComponent,
    InvoiceListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [InvoiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
