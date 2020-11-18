import { Injectable } from '@angular/core';
import { of as observableOf,  Observable } from 'rxjs';
import { TrafficChartData } from '../data/traffic-chart';

@Injectable()
export class TrafficChartService extends TrafficChartData {

  private data: number[] = [
    254, 421, 435, 530,
    730, 620, 325, 9898,
  ];

  getTrafficChartData(): Observable<number[]> {
    return observableOf(this.data);
  }
}
