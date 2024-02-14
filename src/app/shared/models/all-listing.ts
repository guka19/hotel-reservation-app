import { Property } from "./property";

export interface AllListing extends Property {
  hasKitchen?: boolean;
  floorNumber?: number;
  rating?: number;
  totalRooms?: number;
  availableRooms?: number;
  hasPool?: boolean;
  hasGarden?: boolean;
  hasFireplace?: boolean;
  isPetFriendly?: boolean;
  commercialType?: string;
  areaInSquareFeet?: number;
  hasParking?: boolean;
}
