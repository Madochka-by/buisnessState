import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropertiesPageComponent } from './properties-page/properties-page.component';
import { PropertiesPageRouting } from './properties-page-routing.module';

import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { FilterService } from './service/filter.service';
import { CardTemplateComponent } from '../standalone/card-template/card-template.component';
import { StandaloneComponent } from 'src/app/standalone/prev-next-buttons/standalone.component';
import { CarouselComponent } from 'src/app/standalone/carousel/carousel.component';

@NgModule({
  declarations: [PropertiesPageComponent],
  imports: [
    CommonModule,
    PropertiesPageRouting,
    FormsModule,
    DropdownModule,
    CardTemplateComponent,
    StandaloneComponent,
    CarouselComponent,
  ],
  exports: [PropertiesPageComponent],
  providers: [FilterService],
})
export class PropertiesPageModule {}
