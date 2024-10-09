import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { Beverage } from '../common/interface/Beverage';
import { BeveragesService } from '../common/service/beverages.service';
import { RouterModule } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  public beverages!: Beverage[];

  constructor(
    private readonly beverageService: BeveragesService,
    private readonly title: Title
  ) {}

  ngOnInit() {
    this.title.setTitle('Cocktails');
    this.beverageService.findBeverages().subscribe((res: any) => {
      this.beverages = res.drinks;
    });
  }
}
