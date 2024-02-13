import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Slide } from 'src/app/components/image-slider/image-slider.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

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

  constructor(private fb: FormBuilder) {}

}
