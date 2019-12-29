import { Component, OnInit } from '@angular/core';

import { Smartphone } from './smartphone/smartphone';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.css']
})
export class ComponentsComponent implements OnInit {

  smartphones: Smartphone[];
  smartphoneSelected: Smartphone;

  constructor() {
    this.smartphones =
      [
        { name: 'iPhone 3G', model: 'Apple', prize: '560', year: '2008' },
        { name: 'iPhone 4', model: 'Apple', prize: '560', year: '2010' },
        { name: 'iPhone 5', model: 'Apple', prize: '560', year: '2012' },
        { name: 'iPhone 6', model: 'Apple', prize: '560', year: '2014' },
        { name: 'iPhone 7', model: 'Apple', prize: '560', year: '2016' },
        { name: 'iPhone X', model: 'Apple', prize: '560', year: '2017' },
        { name: 'iPhone XS', model: 'Apple', prize: '560', year: '2018' },
        { name: 'iPhone 8', model: 'Apple', prize: '560', year: '2017' },
        { name: 'iPhone XR', model: 'Apple', prize: '560', year: '2018' },
        { name: 'iPhone 11', model: 'Apple', prize: '560', year: '2019' },
      ];
  }

  ngOnInit() {
  }

  onSelected(event: any) {
    this.smartphoneSelected = event;
  }

  onReset() {
    this.smartphoneSelected = null;
  }

}
