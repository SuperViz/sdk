export interface User {
  id?: string;
  name?: string;
  isHost?: boolean;
  isHostCandidate?: boolean;
  isAudience?: boolean;
  color?: string;
  avatar?: Avatar;
}

export interface UserGroup {
  id: string;
  name: string;
}

export interface Avatar {
  model: string;
  thumbnail: string;
}
