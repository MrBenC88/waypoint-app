import { AvailabilityStatus, PurposeOfVisit, HostStatus } from "./enums";

export enum StatusType {
  Availability = "availability",
  Purpose = "purpose",
  Host = "host",
  Location = "location",
  Leaving = "leaving",
  Trip = "trip",
}

// **Data Types**
export type Friend = {
  id: string;
  name: string;
  avatar: string;
  availability: AvailabilityStatus;
  purpose?: PurposeOfVisit;
  hostStatus?: HostStatus;
  city: string; // **Required city field**
};

export type StatusFeedItem = {
  id: string;
  name: string;
  avatar: string;
  type: StatusType;
  status?: AvailabilityStatus;
  purpose?: PurposeOfVisit;
  hostStatus?: HostStatus;
  city: string; // **Required city field**
  date: string;
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
