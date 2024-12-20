import {
  AvailabilityStatus,
  PurposeOfVisit,
  HostStatus,
  LeftoverStatus,
} from "./enums";
import { Friend, StatusFeedItem, StatusType, Trip, CityStatus } from "./types";

// **Notifications Section Data**
export const MOCK_NOTIFICATIONS: StatusFeedItem[] = [
  // **Availability Changes**
  {
    id: "1",
    name: "Alice",
    username: "alice_wanderlust",
    avatar: "https://example.com/avatar1.png",
    type: StatusType.Availability,
    status: AvailabilityStatus.AvailableToMeetUp,
    city: "Toronto",
    date: "Dec 19, 2024",
  },
  {
    id: "2",
    name: "Bob",
    username: "bobthetraveler",
    avatar: "https://example.com/avatar2.png",
    type: StatusType.Availability,
    status: AvailabilityStatus.LookingForRecommendations,
    city: "New York",
    date: "Dec 18, 2024",
  },

  // **Purpose of Visit Changes**
  {
    id: "3",
    name: "Charlie",
    username: "charlie_justchillin",
    avatar: "https://example.com/avatar3.png",
    type: StatusType.Purpose,
    purpose: PurposeOfVisit.ExploringCity,
    city: "Paris",
    date: "Dec 17, 2024",
  },
  {
    id: "4",
    name: "Daisy",
    username: "daisy_globetrotter",
    avatar: "https://example.com/avatar4.png",
    type: StatusType.Purpose,
    purpose: PurposeOfVisit.Conference,
    city: "London",
    date: "Dec 16, 2024",
  },

  // **Host Status Changes**
  {
    id: "5",
    name: "Eli",
    username: "eli_nomad",
    avatar: "https://example.com/avatar5.png",
    type: StatusType.Host,
    hostStatus: HostStatus.OpenToHost,
    city: "Tokyo",
    date: "Dec 15, 2024",
  },
  {
    id: "6",
    name: "Frank",
    username: "frank_adventurer",
    avatar: "https://example.com/avatar6.png",
    type: StatusType.Host,
    hostStatus: HostStatus.NotHosting,
    city: "Berlin",
    date: "Dec 14, 2024",
  },

  // **Location Changes**
  {
    id: "7",
    name: "Grace",
    username: "grace_explorer",
    avatar: "https://example.com/avatar7.png",
    type: StatusType.Location,
    city: "Madrid",
    date: "Dec 13, 2024",
  },
  {
    id: "8",
    name: "Hannah",
    username: "hannah_explorer",
    avatar: "https://example.com/avatar8.png",
    type: StatusType.Location,
    city: "Tokyo",
    date: "Dec 12, 2024",
  },

  // **Leaving Changes**
  {
    id: "9",
    name: "Jack",
    username: "jack_journey",
    avatar: "https://example.com/avatar9.png",
    type: StatusType.Leaving,
    city: "Singapore",
    date: "Dec 11, 2024",
  },
  {
    id: "10",
    name: "Kate",
    username: "kate_worldwide",
    avatar: "https://example.com/avatar10.png",
    type: StatusType.Leaving,
    city: "Paris",
    date: "Dec 10, 2024",
  },

  // **Trip Additions**
  {
    id: "11",
    name: "Liam",
    username: "liam_global",
    avatar: "https://example.com/avatar11.png",
    type: StatusType.Trip,
    city: "Dubai",
    date: "Dec 9, 2024",
  },
  {
    id: "12",
    name: "Mia",
    username: "mia_onthego",
    avatar: "https://example.com/avatar12.png",
    type: StatusType.Trip,
    city: "Hong Kong",
    date: "Dec 8, 2024",
  },

  // Leftover Status
  {
    id: "13",
    name: "Charlie",
    username: "charlie_justchillin",
    avatar: "https://example.com/avatar3.png",
    type: StatusType.Location,
    leftoverStatus: LeftoverStatus.Available,
    city: "Toronto",
    date: "Dec 17, 2024",
  },
  {
    id: "14",
    name: "Daisy",
    username: "daisy_globetrotter",
    avatar: "https://example.com/avatar4.png",
    type: StatusType.Location,
    leftoverStatus: LeftoverStatus.Consumed,
    city: "London",
    date: "Dec 16, 2024",
  },
  {
    id: "15",
    name: "Eli",
    username: "eli_nomad",
    avatar: "https://example.com/avatar5.png",
    type: StatusType.Location,
    leftoverStatus: LeftoverStatus.None,
    city: "Tokyo",
    date: "Dec 15, 2024",
  },
];

// **Friends Section Data**
export const MOCK_FRIENDS: Friend[] = [
  {
    id: "1",
    name: "Alice",
    username: "alice_wanderlust",
    avatar: "https://example.com/avatar1.png",
    availability: AvailabilityStatus.AvailableToMeetUp,
    purpose: PurposeOfVisit.WorkTrip,
    hostStatus: HostStatus.OpenToHost,
    city: "Toronto",
  },
  {
    id: "2",
    name: "Bob",
    username: "bobthetraveler",
    avatar: "https://example.com/avatar2.png",
    availability: AvailabilityStatus.LookingForRecommendations,
    purpose: PurposeOfVisit.ExploringCity,
    city: "New York",
  },
  {
    id: "3",
    name: "Charlie",
    username: "charlie_justchillin",
    avatar: "https://example.com/avatar3.png",
    availability: AvailabilityStatus.JustArrived,
    purpose: PurposeOfVisit.PassingThrough,
    hostStatus: HostStatus.NotHosting,
    city: "Vancouver",
  },
  {
    id: "4",
    name: "Daisy",
    username: "daisy_globetrotter",
    avatar: "https://example.com/avatar4.png",
    availability: AvailabilityStatus.AvailableForDinner,
    purpose: PurposeOfVisit.Conference,
    hostStatus: HostStatus.OpenToHost,
    city: "London",
  },
  {
    id: "5",
    name: "Eli",
    username: "eli_nomad",
    avatar: "https://example.com/avatar5.png",
    availability: AvailabilityStatus.ChillingNoPlans,
    purpose: PurposeOfVisit.Vacation,
    hostStatus: HostStatus.NotHosting,
    city: "Tokyo",
  },
  // leftover status

  {
    id: "6",
    name: "Alice",
    username: "alice_wanderlust",
    avatar: "https://example.com/avatar1.png",
    availability: AvailabilityStatus.AvailableToMeetUp,
    purpose: PurposeOfVisit.WorkTrip,
    hostStatus: HostStatus.OpenToHost,
    leftoverStatus: LeftoverStatus.Available,
    city: "Toronto",
  },
  {
    id: "7",
    name: "Bob",
    username: "bobthetraveler",
    avatar: "https://example.com/avatar2.png",
    availability: AvailabilityStatus.LookingForRecommendations,
    purpose: PurposeOfVisit.ExploringCity,
    leftoverStatus: LeftoverStatus.None,
    city: "New York",
  },
  {
    id: "8",
    name: "Charlie",
    username: "charlie_justchillin",
    avatar: "https://example.com/avatar3.png",
    availability: AvailabilityStatus.JustArrived,
    purpose: PurposeOfVisit.PassingThrough,
    hostStatus: HostStatus.NotHosting,
    leftoverStatus: LeftoverStatus.Consumed,
    city: "Vancouver",
  },
  {
    id: "9",
    name: "Daisy",
    username: "daisy_globetrotter",
    avatar: "https://example.com/avatar4.png",
    availability: AvailabilityStatus.AvailableForDinner,
    purpose: PurposeOfVisit.Conference,
    hostStatus: HostStatus.OpenToHost,
    leftoverStatus: LeftoverStatus.None,
    city: "London",
  },
  {
    id: "10",
    name: "Eli",
    username: "eli_nomad",
    avatar: "https://example.com/avatar5.png",
    availability: AvailabilityStatus.ChillingNoPlans,
    purpose: PurposeOfVisit.Vacation,
    hostStatus: HostStatus.NotHosting,
    leftoverStatus: LeftoverStatus.Available,
    city: "Tokyo",
  },
];

// **Status Feed Data**
export const MOCK_STATUSES: StatusFeedItem[] = [
  // **Availability Changes**
  {
    id: "1",
    name: "Alice",
    username: "alice_wanderlust",
    avatar: "https://example.com/avatar1.png",
    type: StatusType.Availability,
    status: AvailabilityStatus.AvailableToMeetUp,
    city: "Toronto",
    date: "Dec 19, 2024",
  },
  {
    id: "2",
    name: "Frank",
    username: "frank_adventurer",
    avatar: "https://example.com/avatar6.png",
    type: StatusType.Availability,
    status: AvailabilityStatus.LookingForRecommendations,
    city: "Paris",
    date: "Dec 14, 2024",
  },

  // **Purpose of Visit Changes**
  {
    id: "3",
    name: "Bob",
    username: "bobthetraveler",
    avatar: "https://example.com/avatar2.png",
    type: StatusType.Purpose,
    purpose: PurposeOfVisit.Conference,
    city: "Toronto",
    date: "Dec 18, 2024",
  },
  {
    id: "4",
    name: "Grace",
    username: "grace_explorer",
    avatar: "https://example.com/avatar7.png",
    type: StatusType.Purpose,
    purpose: PurposeOfVisit.ExploringCity,
    city: "Paris",
    date: "Dec 13, 2024",
  },

  // **Host Status Changes**
  {
    id: "5",
    name: "Charlie",
    username: "charlie_justchillin",
    avatar: "https://example.com/avatar3.png",
    type: StatusType.Host,
    hostStatus: HostStatus.OpenToHost,
    city: "Toronto",
    date: "Dec 17, 2024",
  },
  {
    id: "6",
    name: "Daisy",
    username: "daisy_globetrotter",
    avatar: "https://example.com/avatar4.png",
    type: StatusType.Host,
    hostStatus: HostStatus.NotHosting,
    city: "Vancouver",
    date: "Dec 12, 2024",
  },

  // **Location Changes**
  {
    id: "7",
    name: "Eli",
    username: "eli_nomad",
    avatar: "https://example.com/avatar5.png",
    type: StatusType.Location,
    city: "Vancouver",
    date: "Dec 16, 2024",
  },
  {
    id: "8",
    name: "Hannah",
    username: "hannah_explorer",
    avatar: "https://example.com/avatar8.png",
    type: StatusType.Location,
    city: "Tokyo",
    date: "Dec 12, 2024",
  },

  // **Leaving Changes**
  {
    id: "9",
    name: "Eli",
    username: "eli_nomad",
    avatar: "https://example.com/avatar5.png",
    type: StatusType.Leaving,
    city: "New York",
    date: "Dec 15, 2024",
  },
  {
    id: "10",
    name: "Hannah",
    username: "hannah_explorer",
    avatar: "https://example.com/avatar8.png",
    type: StatusType.Leaving,
    city: "Tokyo",
    date: "Dec 12, 2024",
  },

  // **Trip Additions**
  {
    id: "11",
    name: "Jack",
    username: "jack_journey",
    avatar: "https://example.com/avatar9.png",
    type: StatusType.Trip,
    city: "Singapore",
    date: "Dec 20, 2024",
  },
  {
    id: "12",
    name: "Kate",
    username: "kate_worldwide",
    avatar: "https://example.com/avatar10.png",
    type: StatusType.Trip,
    city: "London",
    date: "Jan 1, 2025",
  },

  // **Leftover Status Changes**
  {
    id: "13",
    name: "Charlie",
    username: "charlie_justchillin",
    avatar: "https://example.com/avatar3.png",
    type: StatusType.Location,
    leftoverStatus: LeftoverStatus.Available,
    city: "Toronto",
    date: "Dec 17, 2024",
  },
  {
    id: "14",
    name: "Daisy",
    username: "daisy_globetrotter",
    avatar: "https://example.com/avatar4.png",
    type: StatusType.Location,
    leftoverStatus: LeftoverStatus.Consumed,
    city: "London",
    date: "Dec 16, 2024",
  },
  {
    id: "15",
    name: "Eli",
    username: "eli_nomad",
    avatar: "https://example.com/avatar5.png",
    type: StatusType.Location,
    leftoverStatus: LeftoverStatus.None,
    city: "Tokyo",
    date: "Dec 15, 2024",
  },
];

// **Trips Section Data**
export const MOCK_TRIPS: Trip[] = [
  { id: "1", city: "Toronto", date: "Dec 20-25, 2024" },
  { id: "2", city: "New York", date: "Jan 2-10, 2025" },
  { id: "3", city: "Tokyo", date: "Feb 10-18, 2025" },
  { id: "4", city: "Paris", date: "Feb 20-25, 2025" },
  { id: "5", city: "London", date: "March 5-12, 2025" },
  { id: "6", city: "Singapore", date: "April 3-9, 2025" },
];

// **Cities Section Data**
export const MOCK_CITIES: CityStatus[] = [
  { id: "1", city: "Vancouver", friendsCount: 5 },
  { id: "2", city: "Los Angeles", friendsCount: 2 },
  { id: "3", city: "Singapore", friendsCount: 1 },
  { id: "4", city: "New York", friendsCount: 4 },
  { id: "5", city: "Paris", friendsCount: 3 },
  { id: "6", city: "London", friendsCount: 2 },
];
