import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { cards } from 'src/app/get-data-DB/get-data.service';

@Component({
  selector: 'card-template',
  templateUrl: './card-template.component.html',
  styleUrls: ['./card-template.component.scss'],
  imports: [CommonModule],
  standalone: true,
})
export class CardTemplateComponent {
  @Input() obejct?: cards;
}
