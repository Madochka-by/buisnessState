import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { cards, GetDataService } from 'src/app/get-data-DB/get-data.service';
import { FilterService } from '../service/filter.service';

export interface filter {
  selectedLocation: string | undefined;
  selectedType: string | undefined;
  selectedPrice: string | undefined;
  selectedSize: string | undefined;
  selectedYear: string | undefined;
}

@Component({
  selector: 'app-properties-page',
  templateUrl: './properties-page.component.html',
  styleUrls: ['./properties-page.component.scss'],
})
export class PropertiesPageComponent implements OnInit, OnDestroy {
  constructor(private _db: GetDataService, private _filter: FilterService) {}

  public cities?: string[] | number[];
  public types?: string[] | number[];
  public prices?: string[] | number[];
  public sizes?: string[] | number[];
  public years?: string[] | number[];

  public filters: filter = {
    selectedLocation: '',
    selectedType: '',
    selectedPrice: '',
    selectedSize: '',
    selectedYear: '',
  };
  public proveFilt: boolean = false;

  public cardsData!: cards[];
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
      });
  }

  public resetFilters(): void {
    this.filters = {
      selectedLocation: undefined,
      selectedType: undefined,
      selectedPrice: undefined,
      selectedSize: undefined,
      selectedYear: undefined,
    };
    this.proveFilt = false;
  }

  public ngOnDestroy(): void {
    this.$subDestroy.next();
    this.$subDestroy.complete();
  }
}
