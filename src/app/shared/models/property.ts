interface Property {
    id: number;
    name: string;
    location: string;
    pricePerNight: number;
    capacity: number;
    amenities: string[];
    photos: string[];
    rooms?: number;
    vip: boolean;
    type: propertyType;
    bedRoom: number;
    squareMeter: number; 
}

interface Apartment extends Property {
    hasKitchen: boolean;
    floorNumber: number;
}

interface Hotel extends Property {
    rating: number;
    totalRooms: number;
    availableRooms: number;
    hasPool: boolean;
}


interface Cottage extends Property {
    hasGarden: boolean;
    hasFireplace: boolean;
    isPetFriendly: boolean;
}
  
interface CommercialSpace extends Property {
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