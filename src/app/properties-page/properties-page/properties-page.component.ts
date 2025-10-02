import { Component } from '@angular/core';

@Component({
  selector: 'app-properties-page',
  templateUrl: './properties-page.component.html',
  styleUrls: ['./properties-page.component.scss'],
})
export class PropertiesPageComponent {
  public selectedCountry: string | undefined;
  public countries: { name: string }[] = [
    { name: 'Litva' },
    { name: 'Belarus' },
    { name: 'Germany' },
  ];
}
