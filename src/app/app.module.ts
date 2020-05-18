import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RoutingModule} from './routing.module';
import {GstAddComponent} from './GST/gst-add/gst-add.component';
import {GstEditComponent} from './GST/gst-edit/gst-edit.component';
import {GstGetComponent} from './GST/gst-get/gst-get.component';
import {HttpClientModule} from '@angular/common/http';

import { BusinessService } from './business.service';

@NgModule({
  declarations: [
    AppComponent,
    GstAddComponent,
    GstEditComponent,
    GstGetComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    FormsModule,
    HttpClientModule,
    SlimLoadingBarModule,
    ReactiveFormsModule
  ],
  providers: [BusinessService],
  bootstrap: [AppComponent]
})
export class AppModule { }
