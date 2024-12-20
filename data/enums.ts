// **Primary Availability Status**
export enum AvailabilityStatus {
  AvailableToMeetUp = "Available to meet up",
  AvailableForDinner = "Available for dinner",
  LookingForRecommendations = "Looking for recommendations",
  ChillingNoPlans = "Chilling, no big plans",
  Busy = "Busy",
  JustArrived = "Just arrived",
  VisitingShortTime = "Here for a short time",
  RelocatingHere = "Relocating here",
  ExploringCity = "Exploring the city",
  LeavingSoon = "Leaving soon",
  HereFor1Day = "Only here for 1 day",
}

export const AvailabilityStatusEmojis: Record<AvailabilityStatus, string> = {
  [AvailabilityStatus.AvailableToMeetUp]: "☕",
  [AvailabilityStatus.AvailableForDinner]: "🍕",
  [AvailabilityStatus.LookingForRecommendations]: "📍",
  [AvailabilityStatus.ChillingNoPlans]: "😎",
  [AvailabilityStatus.Busy]: "🕒",
  [AvailabilityStatus.JustArrived]: "📍",
  [AvailabilityStatus.VisitingShortTime]: "⏳",
  [AvailabilityStatus.RelocatingHere]: "🚚",
  [AvailabilityStatus.ExploringCity]: "🧭",
  [AvailabilityStatus.LeavingSoon]: "✈️",
  [AvailabilityStatus.HereFor1Day]: "⏳",
};

// **Purpose of Visit**
export enum PurposeOfVisit {
  WorkTrip = "On a work trip",
  Conference = "Here for a conference",
  ExploringCity = "Exploring the city",
  Vacation = "On vacation",
  PassingThrough = "Just passing through",
  Relocating = "Relocating here",
}

export const PurposeOfVisitEmojis: Record<PurposeOfVisit, string> = {
  [PurposeOfVisit.WorkTrip]: "💼",
  [PurposeOfVisit.Conference]: "🎉",
  [PurposeOfVisit.ExploringCity]: "🧭",
  [PurposeOfVisit.Vacation]: "🏖️",
  [PurposeOfVisit.PassingThrough]: "✈️",
  [PurposeOfVisit.Relocating]: "🚚",
};

// **Host Status**
export enum HostStatus {
  OpenToHost = "Open to host",
  NotHosting = "Not hosting",
}

export const HostStatusEmojis: Record<HostStatus, string> = {
  [HostStatus.OpenToHost]: "🛋️",
  [HostStatus.NotHosting]: "❌",
};
