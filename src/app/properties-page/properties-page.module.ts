import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropertiesPageComponent } from './properties-page/properties-page.component';
import { PropertiesPageRouting } from './properties-page-routing.module';

import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [PropertiesPageComponent],
  imports: [CommonModule, PropertiesPageRouting, FormsModule, DropdownModule],
  exports: [PropertiesPageComponent],
})
export class PropertiesPageModule {}
