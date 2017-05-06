import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
})
export class BasicComponent implements OnInit {

  isTrue = false;
  sampleNumber: number | null;

  constructor() { }

  toggle(){
    this.isTrue = !this.isTrue;
  }

  ngOnInit() {
  }

}
