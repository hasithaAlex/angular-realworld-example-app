import { Component, OnInit, Input } from '@angular/core';
import { CountdownComponent } from './countdown.component';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss'],
  providers: [CountdownComponent]
})
export class ProgressbarComponent {

  @Input() process:number = 0;

}
