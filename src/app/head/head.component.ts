import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit {
headerImage:string = '../../../assets/images/titlebackgroundscaled.jpg'
  constructor() { }

  ngOnInit() {
  }

}
