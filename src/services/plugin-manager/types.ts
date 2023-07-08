import { AvatarConfig } from '../integration/participants/types';

export interface PluginOptions {
  isAvatarsEnabled?: boolean;
  isMouseEnabled?: boolean;
  isLaserEnabled?: boolean;
  isNameEnabled?: boolean;
  renderLocalAvatar?: boolean;
  avatarConfig: AvatarConfig;
}
