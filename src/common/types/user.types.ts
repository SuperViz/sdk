export interface User {
  id: string;
  name: string;
  isHost: boolean;
  isHostCandidate: boolean;
  // @TODO enable the flag when the feature is complete
  // isAudience?: boolean;
  avatarUrl?: string;
  color?: string;
}

export interface UserGroup {
  id: string;
  name: string;
}
