import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Slide } from 'src/app/components/image-slider/image-slider.component';
import { AllListing } from 'src/app/shared/models/all-listing';
import { PropertyService } from 'src/app/shared/services/property.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  vipProperties: AllListing[] = [];

  responsiveOptions: any[] | undefined;

  cities: string[] = ["Tbilisi", "Batumi", "Borjomi", "Qutaisi", "Bakuriani", "Gudauri", "Borjomi", "Gori", "Zugdidi", "Telavi", "Yazbegi", "Svaneti"];

  images: Slide[] = [
    {
      imgSrc: "assets/image-slider/house.jpg",
      imgAlt: "Houses",
    },
    {
      imgSrc: "assets/image-slider/flat.jpg",
      imgAlt: "flat",
    },
    {
      imgSrc: "assets/image-slider/hotel.jpg",
      imgAlt: "hotel",
    },
    {
      imgSrc: "assets/image-slider/commercial.jpg",
      imgAlt: "commercial space",
    },
  ]

  searchForm = this.fb.group({
    city: [""],
    title: [""]
  })

  constructor(private fb: FormBuilder, private propertyService: PropertyService) {
    this.propertyService.getVipProperties().subscribe(data => {
      this.vipProperties = data;
    })

      this.responsiveOptions = [
        {
            breakpoint: '1400px',
            numVisible: 3,
            numScroll: 3
        },
        {
            breakpoint: '1220px',
            numVisible: 2,
            numScroll: 2
        },
        {
            breakpoint: '1100px',
            numVisible: 1,
            numScroll: 1
        }
    ];
  }

  getSeverity(status: string) {
    switch (status) {
        case 'INSTOCK':
            return 'success';
        case 'LOWSTOCK':
            return 'warning';
        case 'OUTOFSTOCK':
            return 'danger';
        default:
          return true;
    }
}
  
}
