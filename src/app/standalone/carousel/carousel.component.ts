import { Component, Input, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Carousel, CarouselModule } from 'primeng/carousel';
import { CardTemplateComponent } from '../card-template/card-template.component';
import { cards } from '../../get-data-DB/get-data.service';
import { StandaloneComponent } from '../prev-next-buttons/standalone.component';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [
    CommonModule,
    CarouselModule,
    CardTemplateComponent,
    StandaloneComponent,
  ],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent {
  @Input() object!: cards[];

  @ViewChild('carousel') carousel!: Carousel;

  public nextBtnCarusel(): void {
    this.carousel.navForward(new MouseEvent('click'));
  }

  public prevBtnCarusel(): void {
    this.carousel.navBackward(new MouseEvent('click'));
  }
}
