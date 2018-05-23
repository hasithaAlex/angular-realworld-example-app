import { Component, Input, OnInit, Output, EventEmitter, OnDestroy, OnChanges } from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss']
})
export class CountdownComponent implements OnInit, OnDestroy, OnChanges {


  ngOnInit(): void {
    this.startCountdown();
  }

  @Input() init:number = null;
  public counter:number = 0;

  private countdownTimerref:any = null;

  @Output() onDecrease = new EventEmitter<number>();
  @Output() onComplete = new EventEmitter<void>();

  startCountdown() {
    if(this.init && this.init >0){
      this.clearTimeout();
      this.counter = this.init;
      this.doCountdown();
    }
  }

  doCountdown() {
    this.countdownTimerref = setTimeout(()=>{
      this.counter = this.counter -1;
      this.processCountdown();
    },1000);
  }

  private clearTimeout(){
    if (this.countdownTimerref) {
      clearTimeout(this.countdownTimerref);
      this.countdownTimerref = null;
    }
  }

  processCountdown(){
    this.onDecrease.emit(this.counter); 

    console.log("count is "+this.counter);

    if(this.counter == 0){
      this.onComplete.emit();
      console.log("--counter end--")
    }else{
      this.doCountdown();
    }
  }


  ngOnChanges(changes):void{
    console.log("init values ",changes.init.currentValue);
    this.startCountdown();
  }

  ngOnDestroy(): void {
    this.clearTimeout();
  }


}
