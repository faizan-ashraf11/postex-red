import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-icon-section',
  templateUrl: './icon-section.component.html',
  styleUrls: ['./icon-section.component.scss']
})
export class IconSectionComponent implements OnInit {

  row1Icon: any[] = [
    {
      iconName: "postage-stamp.png",
      iconText: "Find Postal Code"
    },
    {
      iconName: "calculator-variant.png",
      iconText: "Find Rate"
    },
    {
      iconName: "map-marker-question.png",
      iconText: "Locate Us"
    }
  ]
  row2Icon: any[] = [
    {
      iconName: "book-clock-outline.png",
      iconText: "Schedule Pickup"
    },
    {
      iconName: "storefront-outline.png",
      iconText: "E-com Login"
    },
    {
      iconName: "face-agent.png",
      iconText: "Contact Us"
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
