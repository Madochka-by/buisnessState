import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { HomePageRouting } from './home-page-routing.module';
import { StandaloneComponent } from '../standalone/standalone.component';
import { CardTemplateComponent } from '../card-template/card-template/card-template.component';
// import { CarouselModule } from 'primeng/carousel';

@NgModule({
  declarations: [HomePageComponent],
  imports: [
    CommonModule,
    HomePageRouting,
    CardTemplateComponent,
    StandaloneComponent,
  ],
})
export class HomePageModule {}
