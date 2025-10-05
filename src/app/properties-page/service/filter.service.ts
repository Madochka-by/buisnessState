import { Injectable } from '@angular/core';
import { cards } from 'src/app/get-data-DB/get-data.service';

@Injectable()
export class FilterService {
  private output: string[] | number[] = [];

  public outputFilters(object: cards[], choise: string): string[] | number[] {
    switch (choise) {
      case 'location':
        this.output = [...new Set(object.map((el: cards) => el.location))];
        break;
      case 'property_type':
        this.output = [...new Set(object.map((el: cards) => el.houseType))];
        break;
      case 'pricing_range':
        this.output = [
          ...new Set(
            object
              .map((el: cards) => el.price)
              .sort((a: number, b: number) => a - b)
          ),
        ];
        break;
      case 'property_size':
        this.output = [
          ...new Set(
            object
              .map((el: cards) => el.area)
              .sort((a: number, b: number) => a - b)
          ),
        ];
        break;
      case 'build_years':
        this.output = [
          ...new Set(
            object
              .map((el: cards) => el.buildYear)
              .sort((a: string, b: string) => +a - +b)
          ),
        ];
        break;
    }

    return this.output;
  }
}
