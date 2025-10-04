import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { cards } from '../../get-data-DB/get-data.service';
import { FirstZeroNumPipe } from '../pipe-zero/first-zero-num.pipe';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-standalone',
  templateUrl: './standalone.component.html',
  styleUrls: ['./standalone.component.scss'],
  imports: [FirstZeroNumPipe, CommonModule],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StandaloneComponent {
  @Output('prev') prevBtn = new EventEmitter<void>();
  @Output('next') nextBtn = new EventEmitter<void>();

  @Input() object!: cards[];

  public slide: number = 1;
  public countAllSlides!: number;

  public currentSlide(event: Event): void {
    const target = event.target as HTMLElement;
    const button = target.closest<HTMLButtonElement>('#btn')!;

    if (button.dataset['type'] == 'next') {
      this.slide == this.countAllSlides
        ? (this.slide = this.countAllSlides)
        : (this.slide += 1);
    } else {
      this.slide == 1 ? (this.slide = 1) : (this.slide -= 1);
    }
  }

  public countSlides(length: number): number {
    this.countAllSlides = Math.ceil(length / 3);
    return this.countAllSlides;
  }
}
