import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {

  isVisible: boolean = false;
  widthSet: any = window.innerWidth > 500 ? 300 : window.innerWidth;
  constructor() {
    console.log('widthSet' , this.widthSet , window.innerWidth);
  }

  ngOnInit(): void {
  }

}
