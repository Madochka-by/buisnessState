import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesPageComponent } from './services-page/services-page.component';
import { ServicesPageRouting } from './services-page-routing.module';

@NgModule({
  declarations: [ServicesPageComponent],
  imports: [CommonModule, ServicesPageRouting],
})
export class ServicesPageModule {}
