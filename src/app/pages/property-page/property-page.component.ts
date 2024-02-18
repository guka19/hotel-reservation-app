import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AllListing } from 'src/app/shared/models/all-listing';
import { PropertyService } from 'src/app/shared/services/property.service';

@Component({
  selector: 'app-property-page',
  templateUrl: './property-page.component.html',
  styleUrls: ['./property-page.component.scss']
})
export class PropertyPageComponent implements OnInit {

  propertyId!: string | null;
  property!: AllListing;

  properties: AllListing[] = [];

  responsiveOptions: any[] | undefined;

  currency = "gel";

  favorite = false;

  toggleFavorite() {
    this.favorite = !this.favorite;
  }

  changetoUsd() {
    this.currency = "usd";
  }

  changeToGel() {
    this.currency = "gel";
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(c => {
      this.propertyId = c.get('id');

      if (this.propertyId) {
        this.prService.getProperty(this.propertyId).subscribe(data => {
          this.property = data;
          console.log(this.property);
        })
      }
    })

    this.prService.getAllProperties().subscribe(data => {
      this.properties = data;
    })

    this.responsiveOptions = [
      {
          breakpoint: '1024px',
          numVisible: 5
      },
      {
          breakpoint: '768px',
          numVisible: 3
      },
      {
          breakpoint: '560px',
          numVisible: 1
      }
  ];
  }

  constructor(private route: ActivatedRoute, private prService: PropertyService) {

  }

}
