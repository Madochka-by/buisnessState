import { Injectable } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export interface cards {
  id: number;
  additionalFees: string;
  area: number;
  buildYear: string;
  description: string;
  descriptionPreview: string;
  features: string[];
  houseBathroom: number;
  houseBedroom: number;
  houseType: string;
  image: string;
  imageList: string[];
  location: string;
  name: string;
  price: number;
}

@Injectable({
  providedIn: 'root',
})
export class GetDataService {
  constructor(private _httpClient: HttpClient) {}

  private $observable?: Observable<cards[]>;

  public getData(): Observable<cards[]> {
    return (this.$observable = this._httpClient
      .get<cards[]>(
        'https://real-business-angular-default-rtdb.firebaseio.com/CARDS.json'
      )
      .pipe(shareReplay(1)));
  }
}
