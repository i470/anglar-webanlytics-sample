import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitorBarChartComponent } from './visitor-bar-chart.component';

describe('VisitorBarChartComponent', () => {
  let component: VisitorBarChartComponent;
  let fixture: ComponentFixture<VisitorBarChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitorBarChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitorBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
