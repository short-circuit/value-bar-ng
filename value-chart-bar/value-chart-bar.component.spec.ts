import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValueChartBarComponent } from './value-chart-bar.component';

describe('ValueChartBarComponent', () => {
  let component: ValueChartBarComponent;
  let fixture: ComponentFixture<ValueChartBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValueChartBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValueChartBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
