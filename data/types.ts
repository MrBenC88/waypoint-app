import {
  AvailabilityStatus,
  PurposeOfVisit,
  HostStatus,
  LeftoverStatus,
  RelationshipStatus,
} from "./enums";

export enum StatusType {
  Availability = "availability",
  Purpose = "purpose",
  Host = "host",
  Leftover = "leftover",
  Location = "location",
  Leaving = "leaving",
  Trip = "trip",
}

// **Data Types**
export type Friend = {
  id: string;
  name: string;
  username: string;
  avatar: string;
  availability: AvailabilityStatus;
  purpose?: PurposeOfVisit;
  hostStatus?: HostStatus;
  leftoverStatus?: LeftoverStatus; // 🆕 New field for Leftover status
  city: string; // **Required city field**
  relationshipStatus: RelationshipStatus;
};

export type StatusFeedItem = {
  id: string;
  name: string;
  username: string;
  avatar: string;
  type: StatusType;
  status?: AvailabilityStatus;
  purpose?: PurposeOfVisit;
  hostStatus?: HostStatus;
  leftoverStatus?: LeftoverStatus; // 🆕 New field for Leftover status in the status feed
  city: string; // **Required city field**
  date: string;
  relationshipStatus: RelationshipStatus;
};

export type Trip = {
  id: string;
  city: string;
  date: string;
};

export type CityStatus = {
  id: string;
  city: string;
  friendsCount: number;
};
