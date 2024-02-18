export interface Property {
    id: number;
    name: string;
    location: string;
    pricePerNight: number;
    capacity: number;
    amenities: {
      gym: boolean;
      restaurant: boolean;
      pool: boolean;
      balcony: boolean;
      kitchen: boolean;
      parking: boolean;
      gas: boolean;
      television: boolean;
      internet: boolean;
      hotWater: boolean;
    };
    photos: string[];
    rooms?: number;
    vip: boolean;
    type: "hotel" | "cottage" | "apartment" | "commercial";
    bedRoom: number;
    squareMeter: number;
  }

export interface Apartment extends Property {
    hasKitchen: boolean;
    floorNumber: number;
}

interface Hotel extends Property {
    rating: number;
    totalRooms: number;
    availableRooms: number;
    hasPool: boolean;
}


export interface Cottage extends Property {
    hasGarden: boolean;
    hasFireplace: boolean;
    isPetFriendly: boolean;
}
  
export interface CommercialSpace extends Property {
    commercialType: string; 
    areaInSquareFeet: number;
    hasParking: boolean;
  }


export enum propertyType {
    hotel,
    cottage,
    apartment,
    commercial
}