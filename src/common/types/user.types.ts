export interface User {
  id: string;
  name: string;
  isHost: boolean;
  isHostCandidate: boolean;
  isAudience?: boolean;
  avatarUrl?: string;
}

export interface UserGroup {
  id: string;
  name: string;
}
