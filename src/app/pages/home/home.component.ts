import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  row1Icon: any[] = [
    {
      iconName: "qr_code_scanner",
      iconText: "Find Postal Code"
    },
    {
      iconName: "calculate",
      iconText: "Find Rate"
    },
    {
      iconName: "location_on",
      iconText: "Locate Us"
    }
  ]
  row2Icon: any[] = [
    {
      iconName: "calendar_month",
      iconText: "Schedule Pickup"
    },
    {
      iconName: "calendar_today",
      iconText: "E-com Login"
    },
    {
      iconName: "support_agent",
      iconText: "Contact Us"
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
