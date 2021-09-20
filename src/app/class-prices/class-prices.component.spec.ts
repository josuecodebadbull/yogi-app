import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassPricesComponent } from './class-prices.component';

describe('ClassPricesComponent', () => {
  let component: ClassPricesComponent;
  let fixture: ComponentFixture<ClassPricesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassPricesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassPricesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
