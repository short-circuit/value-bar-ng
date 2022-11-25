import { AfterContentInit, ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'value-chart-bar',
  templateUrl: './value-chart-bar.component.html',
  styleUrls: ['./value-chart-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class ValueChartBarComponent implements AfterContentInit {
  ngAfterContentInit(): void {
    if (this.delay) {
      setTimeout(() => {
        this.barValue = this.value;
      }, this.delay);
    } else { this.barValue = this.value; }
  }
  @Input() value: number = 0;
  @Input() rtl: boolean = false;
  @Input() color: string = '#1666b7';
  @Input() height: number = 18;
  @Input() style: number = 1;
  @Input() delay: number = 0;
  barValue = 0;
}
