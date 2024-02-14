import { Component, Input } from '@angular/core';
import { AllListing } from 'src/app/shared/models/all-listing';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.scss']
})
export class PropertyCardComponent {
  stateOptions: any[] = [{label: 'Off', value: 'off'}, {label: 'On', value: 'on'}];

    value: string = 'off';

    currency = "gel";

    @Input() property!: AllListing;

    changetoUsd() {
      this.currency = "usd";
    }

    changeToGel() {
      this.currency = "gel";
    }
}
