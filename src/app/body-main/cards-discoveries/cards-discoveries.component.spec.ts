import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsDiscoveriesComponent } from './cards-discoveries.component';

describe('CardsDiscoveriesComponent', () => {
  let component: CardsDiscoveriesComponent;
  let fixture: ComponentFixture<CardsDiscoveriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsDiscoveriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardsDiscoveriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
