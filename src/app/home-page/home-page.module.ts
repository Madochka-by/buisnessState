import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { HomePageRouting } from './home-page-routing.module';
import { StandaloneComponent } from '../standalone/prev-next-buttons/standalone.component';
import { CardTemplateComponent } from '../standalone/card-template/card-template.component';
import { CarouselComponent } from 'src/app/standalone/carousel/carousel.component';

@NgModule({
  declarations: [HomePageComponent],
  imports: [
    CommonModule,
    HomePageRouting,
    CardTemplateComponent,
    StandaloneComponent,
    CarouselComponent,
  ],
})
export class HomePageModule {}
