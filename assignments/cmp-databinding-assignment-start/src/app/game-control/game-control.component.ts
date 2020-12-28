import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  num: number = 0;

  timer;

  @Output() intervalFired = new EventEmitter<number>();

  startGame() {
    this.timer = setInterval(() => {
      this.intervalFired.emit(this.num + 1);
      this.num++;
    }, 1000);
  }

  stopGame() {
    clearInterval(this.timer);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
