import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { cards, GetDataService } from 'src/app/get-data-DB/get-data.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit, OnDestroy {
  constructor(private _db: GetDataService) {}

  public cardsData!: cards[];
  private $subDestroy = new Subject<void>();

  public ngOnInit(): void {
    this._db
      .getData()
      .pipe(takeUntil(this.$subDestroy))
      .subscribe((res: cards[]) => {
        this.cardsData = res;
      });
  }

  public ngOnDestroy(): void {
    this.$subDestroy.next();
    this.$subDestroy.complete();
  }
}
