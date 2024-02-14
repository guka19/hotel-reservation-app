import { Component } from '@angular/core';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.scss']
})
export class PropertyCardComponent {
  stateOptions: any[] = [{label: 'Off', value: 'off'}, {label: 'On', value: 'on'}];

    value: string = 'off';

    currency = "gel";

    price = 830;

    priceInUsd = 830 / 2.70;

  changetoUsd() {
    this.currency = "usd";
  }

  changeToGel() {
    this.currency = "gel";
  }
}
