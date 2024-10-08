import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Beverage } from '../common/interface/Beverage';
import { BeveragesService } from '../common/service/beverages.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  public beverages!: Beverage[];

  constructor(private readonly beverageService: BeveragesService) {}

  ngOnInit() {
    this.beverageService.findBeverages().subscribe((res: any) => {
      this.beverages = res.drinks;
    });
  }
}
