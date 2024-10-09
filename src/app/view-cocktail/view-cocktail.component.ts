import { Component, OnInit } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { Beverage } from '../common/interface/Beverage';
import { BeveragesService } from '../common/service/beverages.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import {
  MatSnackBar,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-view-cocktail',
  standalone: true,
  imports: [MatChipsModule, CommonModule, MatCardModule],
  templateUrl: './view-cocktail.component.html',
  styleUrl: './view-cocktail.component.scss',
})
export class ViewCocktailComponent implements OnInit {
  public cocktailData!: Beverage;
  private dynamicId!: number;
  private readonly verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(
    private readonly beverageService: BeveragesService,
    private readonly route: ActivatedRoute,
    private readonly _snackBar: MatSnackBar,
    private readonly router: Router,
    private readonly title: Title,
    private readonly meta: Meta
  ) {}

  ngOnInit() {
    this.dynamicId = +this.route.snapshot.paramMap.get('id')!;
    this.beverageService
      .findBeverageById(this.dynamicId)
      .subscribe((res: any) => {
        if (res.drinks?.length > 0) {
          this.cocktailData = res.drinks[0];
          this.title.setTitle(this.cocktailData.strDrink);
          this.meta.updateTag({
            name: 'description',
            content: this.cocktailData.strCategory,
          });
        } else {
          this._snackBar
            .open('No Data Found', 'Ok', {
              verticalPosition: this.verticalPosition,
            })
            .onAction()
            .subscribe(() => {
              this.router.navigate(['dashboard']);
            });
        }
      });
  }
}
