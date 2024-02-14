interface AllListing {
    id: number;
    name: string;
    location: string;
    pricePerNight: number;
    capacity: number;
    amenities: string[];
    photos: string[];
    rooms?: number;
    hasKitchen?: boolean;
    floorNumber?: number;
    rating?: number;
    totalRooms?: number;
    availableRooms?: number;
    hasPool?: boolean;
    hasGarden?: boolean;
    hasFireplace?: boolean;
    isPetFriendly?: boolean;
    type?: string;
    areaInSquareFeet?: number;
    hasParking?: boolean;
  }
  