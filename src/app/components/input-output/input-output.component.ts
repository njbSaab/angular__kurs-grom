import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-output',
  templateUrl: './input-output.component.html',
  styleUrls: ['./input-output.component.scss']
})
export class InputOutputComponent implements OnInit
{
  @Input()
  title!: string;

  @Input()
  counter = 0

  @Output()
  counterChange = new EventEmitter<number>()

  sayHi = new EventEmitter()
  constructor() {
    console.log('constructor', this.title);
  }
  ngOnInit():void{
    console.log('ngOnInit', this.title);
  }
  onSayHi(){
  this.sayHi.emit(this.title + ' helo')
  }

}
