import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCocktailComponent } from './view-cocktail.component';

describe('ViewCocktailComponent', () => {
  let component: ViewCocktailComponent;
  let fixture: ComponentFixture<ViewCocktailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewCocktailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewCocktailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
