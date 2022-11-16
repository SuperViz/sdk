import { DefaultUsersOn3DManager, UserOn3D, UserTo3D } from './types';

export class IntegrationUsersManager implements DefaultUsersOn3DManager {
  private _user: UserOn3D;
  private _users: UserOn3D[];

  public get user(): UserOn3D {
    return this._user;
  }

  public get users(): UserOn3D[] {
    return this._users;
  }

  /**
   * @function addUserToList
   * @description add user list in 3D space
   * @param {UserOn3D[]} users
   * @returns {void}
   */
  public addUserToList = (user: UserOn3D): void => {
    if (!this._users) {
      this._users = [];
    }
    this._users = [...this._users, user];
  };

  /**
   * @function setLocalUser
   * @description set current user
   * @param {UserOn3D} user
   * @returns {void}
   */
  public setLocalUser = (user: UserOn3D): void => {
    this._user = user;
  };

  /**
   * @function createUserOn3D
   * @description Creates a user object with properties for 3D space
   * @param {UserTo3D} user
   * @returns {UserOn3D}
   */
  public createUserOn3D = ({ id, name, avatarUrl }: UserTo3D): UserOn3D => {
    const userOn3D: UserOn3D = {
      id,
      name,
      avatarUrl,
      position: {
        x: 0,
        y: 0,
        z: 0,
      },
      rotation: {
        x: 0,
        y: 0,
      },
    };

    return userOn3D;
  };

  /**
   * @function removeUser
   * @description remove user from list
   * @param {UserOn3D} user
   * @returns {void}
   */
  public removeUser = (user: UserOn3D): void => {
    this._users = this._users.filter((userOnlist) => userOnlist.id !== user.id);
  };
}
