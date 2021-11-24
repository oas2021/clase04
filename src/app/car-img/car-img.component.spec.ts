import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarImgComponent } from './car-img.component';

describe('CarImgComponent', () => {
  let component: CarImgComponent;
  let fixture: ComponentFixture<CarImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarImgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
