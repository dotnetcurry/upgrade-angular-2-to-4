import { Component, OnInit } from '@angular/core';
import dataset from '../data';

@Component({
  selector: 'app-dino-list',
  templateUrl: './dino-list.component.html',
  styleUrls: ['./dino-list.component.css']
})
export class DinoListComponent implements OnInit {

  dinosaurs = dataset.dinosaurs;
  constructor() { }

  ngOnInit() {
  }

}
