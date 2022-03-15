import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValuableComponent } from './valuable.component';

describe('ValuableComponent', () => {
  let component: ValuableComponent;
  let fixture: ComponentFixture<ValuableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValuableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValuableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
