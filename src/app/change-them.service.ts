import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ChangeThemService {
  constructor() {}

  public changeThem(them: boolean): void {
    if (them) {
      document.body.classList.remove('dark-them');
      document.body.classList.add('white-them');
    } else {
      document.body.classList.remove('white-them');
      document.body.classList.add('dark-them');
    }

    localStorage.setItem('them', JSON.stringify(them));
  }
}
