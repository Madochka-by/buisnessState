import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { cards, GetDataService } from 'src/app/get-data-DB/get-data.service';
import { FilterService } from '../service/filter.service';

export interface filter {
  selectedLocation: string | undefined;
  selectedType: string | undefined;
  selectedPrice: string | undefined;
  selectedSize: string | undefined;
  selectedYear: string | undefined;
  inputValue: string | undefined;
}

@Component({
  selector: 'app-properties-page',
  templateUrl: './properties-page.component.html',
  styleUrls: ['./properties-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PropertiesPageComponent implements OnInit, OnDestroy {
  constructor(
    private _db: GetDataService,
    private _filter: FilterService,
    private cdr: ChangeDetectorRef
  ) {}

  public cities?: string[] | number[];
  public types?: string[] | number[];
  public prices?: string[] | number[];
  public sizes?: string[] | number[];
  public years?: string[] | number[];

  public filters: filter = {
    selectedLocation: undefined,
    selectedType: undefined,
    selectedPrice: undefined,
    selectedSize: undefined,
    selectedYear: undefined,
    inputValue: undefined,
  };
  public checkFiltersData!: string[];

  public proveFilt: boolean = false;
  public inputValue?: string;

  public cardsData!: cards[];
  public currentCardsData!: cards[];
  private $subDestroy = new Subject<void>();

  public ngOnInit(): void {
    this._db
      .getData()
      .pipe(takeUntil(this.$subDestroy))
      .subscribe((res: cards[]) => {
        this.cities = this._filter.outputFilters(res, 'location');
        this.types = this._filter.outputFilters(res, 'property_type');
        this.prices = this._filter.outputFilters(res, 'pricing_range');
        this.sizes = this._filter.outputFilters(res, 'property_size');
        this.years = this._filter.outputFilters(res, 'build_years');

        this.cardsData = res;
        this.currentCardsData = res;

        this.cdr.markForCheck();
      });
  }

  public checkFilters(): void {
    this.checkFiltersData = [];
    Object.values(this.filters).forEach((el: any) => {
      if (el != undefined) {
        this.checkFiltersData.push(el);
      }
    });
    if (this.checkFiltersData.length == 0) {
      this.proveFilt = false;
    }
  }

  public updateFilters(): void {
    let filtered: cards[] = this.cardsData;

    if (this.filters.selectedLocation) {
      filtered = this.cardsData.filter(
        (card: cards) => card.location == this.filters.selectedLocation
      );
    }
    if (this.filters.selectedType) {
      filtered = this.cardsData.filter(
        (card: cards) => card.houseType == this.filters.selectedType
      );
    }
    if (this.filters.selectedPrice) {
      const _price: number = +this.filters.selectedPrice;
      filtered = this.cardsData.filter((card: cards) => card.price <= _price);
    }
    if (this.filters.selectedSize) {
      const _size: number = +this.filters.selectedSize;
      filtered = this.cardsData.filter((card: cards) => card.area <= _size);
    }
    if (this.filters.selectedYear) {
      const _year: number = +this.filters.selectedYear;
      filtered = this.cardsData.filter(
        (card: cards) => +card.buildYear <= _year
      );
    }
    if (this.filters.inputValue) {
      const _input: string = this.filters.inputValue
        ?.toString()
        .trim()
        .toLowerCase();
      filtered = this.cardsData.filter((card: cards) =>
        card.name.toLowerCase().includes(_input)
      );
    }

    this.currentCardsData = filtered;
  }

  @ViewChild('valueHref') input!: ElementRef<HTMLInputElement>;

  public deleteFilter(key: keyof filter): void {
    key === 'inputValue' ? (this.input.nativeElement.value = '') : '';
    this.filters[key] = undefined;
    this.updateFilters();
  }

  public resetFilters(): void {
    this.filters = {
      selectedLocation: undefined,
      selectedType: undefined,
      selectedPrice: undefined,
      selectedSize: undefined,
      selectedYear: undefined,
      inputValue: undefined,
    };
    this.input.nativeElement.value = '';
    this.proveFilt = false;
    this.currentCardsData = this.cardsData;
  }

  public ngOnDestroy(): void {
    this.$subDestroy.complete();
    this.$subDestroy.next();
  }
}
