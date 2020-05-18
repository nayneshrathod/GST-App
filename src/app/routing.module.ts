import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {GstAddComponent} from './GST/gst-add/gst-add.component';
import {GstEditComponent} from './GST/gst-edit/gst-edit.component';
import {GstGetComponent} from './GST/gst-get/gst-get.component';

const routes: Routes = [
  {
    path: 'business/create',
    component: GstAddComponent
  },
  {
    path: 'business/edit/:id',
    component: GstEditComponent
  },
  {
    path: 'business',
    component: GstGetComponent
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class RoutingModule {
}
