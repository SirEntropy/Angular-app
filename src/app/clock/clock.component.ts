import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit {
  @Input() data: number;
  heditmode = false;
  meditmode = false;
  seditmode = false;
  currentTime = new Date();
  myInterval: any;
  constructor() {
    this.myInterval = setInterval(() => {
       this.currentTime = new Date();
    }, 1000);
  }

  ngOnInit(): void {
  }

  stopClock() {
    clearInterval(this.myInterval);
  }

  startClock() {
    this.myInterval = setInterval(() => {
      this.currentTime = new Date();
    }, 1000);
  }

  onKeydown(event) {
    if (event.key === 'Enter') {
      this.heditmode = false;
      this.meditmode = false;
      this.seditmode = false;
      event.target.blur();
      this.startClock();
    }
  }


}
