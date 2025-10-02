import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ChangeThemService } from '../change-them.service';

const swap = trigger('swap', [
  state('moon', style({ transform: 'translateX(0)' })),
  state('sun', style({ transform: 'translateX(100%)' })),
  transition('moon <=> sun', animate('0.2s ease-in-out')),
]);

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [swap],
})
export class HeaderComponent implements OnInit {
  public closeModal: boolean = false;
  public toggleThem: boolean = false;

  constructor(public _them: ChangeThemService) {}

  public ngOnInit(): void {
    if (localStorage.length != 0) {
      const parse: any = localStorage.getItem('them');
      this.toggleThem = JSON.parse(parse);
      this._them.changeThem(this.toggleThem);
    } else {
      this._them.changeThem(this.toggleThem);
    }
  }
}
