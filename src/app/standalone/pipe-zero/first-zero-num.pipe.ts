import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'zero',
  standalone: true,
})
export class FirstZeroNumPipe implements PipeTransform {
  transform(value: number): string {
    return value > 0 && value <= 9 ? '0' + value.toString() : value.toString();
  }
}
