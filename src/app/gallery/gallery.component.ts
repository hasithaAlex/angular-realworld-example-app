import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {

  

  counterProgress:number = 0;
  totalCountdown:number = 15;

  constructor() { }  

  updateProgress($event){   
    this.counterProgress = (this.totalCountdown - $event)/this.totalCountdown * 100;
    console.log(">"+this.counterProgress);
  }

  countdownFinish(){
    console.log("countdown has end");
  }

}
