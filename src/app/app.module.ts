import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ListServicesComponent } from './list-services/list-services.component';
import { FormServicesComponent } from './form-services/form-services.component';

@NgModule({
  declarations: [
    AppComponent,
    ListServicesComponent,
    FormServicesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
