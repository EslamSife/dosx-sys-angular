import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InvoiceListComponent } from './components/invoice/invoice-list/invoice-list.component';
import {HttpClientModule} from '@angular/common/http';
import { NewInvoiceComponent } from './components/invoice/new-invoice/new-invoice.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import {InvoiceListItemComponent} from './components/invoice/invoice-list/invoice-list-item/invoice-list-item.component';
import { InvoiceComponent } from './components/invoice/invoice.component';
import { InvoiceDetailComponent } from './components/invoice/invoice-detail/invoice-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AngularMaterialModule} from './angular-material.module';

@NgModule({
  declarations: [
    AppComponent,
    InvoiceListComponent,
    NewInvoiceComponent,
    HeaderComponent,
    InvoiceListItemComponent,
    InvoiceComponent,
    InvoiceDetailComponent
  ],
  imports: [
    BrowserModule,
    AngularMaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
