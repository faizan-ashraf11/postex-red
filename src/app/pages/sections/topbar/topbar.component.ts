import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {

  isVisible: boolean = false;
  widthSet: any = window.innerWidth;
  constructor() { }

  ngOnInit(): void {
  }

}
