export interface Destination {
  code: string;
  name: string;
}

export type PolicyStatus = "Active" | "Expired" | "Cancelled";

export type PolicyType = "Single Trip" | "Annual";

export interface Policy {
  policyNumber: string;
  policyStart: string;
  policyEnd: string;
  primaryTravellerFirstname: string;
  primaryTravellerLastName?: string;
  primaryTravellerPhoneNumber: string;
  status: PolicyStatus;
  destinations: Destination[];
  type: PolicyType;
  planName: string;
  excess: number;
  maxTripDuration?: number;
  pdsUrl: string;
  certificateUrl: string;
}
