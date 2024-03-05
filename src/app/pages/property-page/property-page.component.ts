import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AllListing } from 'src/app/shared/models/all-listing';
import { Owner } from 'src/app/shared/models/owner';
import { User } from 'src/app/shared/models/user';
import { AuthService } from 'src/app/shared/services/auth.service';
import { PropertyService } from 'src/app/shared/services/property.service';

@Component({
  selector: 'app-property-page',
  templateUrl: './property-page.component.html',
  styleUrls: ['./property-page.component.scss']
})
export class PropertyPageComponent implements OnInit {

  propertyId!: string | null;
  property!: AllListing;
  user!: User | Owner;
  isLoggedIn: boolean = false;
  isFavorite!: boolean;

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

  addFavorites() {
    this.isFavorite = true;
    if (this.isLoggedIn) {
      this.prService.addToFavorites({
        userId: this.user.id,
        listingId: this.property.id
      }).subscribe(data => {
        console.log(`Listing #${data.listingId} has been added to favorites`);
      });
    } else {
      alert("Login to add to favorites");
    }
  }

  ngOnInit(): void {
    this.auth.isAuthenticated$.subscribe((isAuthenticated) => {
      this.isLoggedIn = isAuthenticated;
      this.user = this.auth.getUser();
      this.cdr.detectChanges();
    });

    this.isLoggedIn = this.auth.isLoggedIn();
    if (this.isLoggedIn) {
      this.user = this.auth.getUser();
    }

    this.route.paramMap.subscribe(c => {
      this.propertyId = c.get('id');

      if (this.propertyId) {
        this.prService.getProperty(this.propertyId).subscribe(data => {
          this.property = data;

          this.prService.getFavorite(this.property.id).subscribe(data => {
            if (data.userId === this.user.id) {
              this.isFavorite = true;
            } else {
              this.isFavorite = false;
            }
          });
        });
      }
    });

    this.prService.getAllProperties().subscribe(data => {
      this.properties = data;
    });

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


  constructor(private route: ActivatedRoute, private prService: PropertyService, private auth: AuthService, private cdr: ChangeDetectorRef) {
    
  }

}
