import { DefaultParticipantsOn3DManager, ParticipantOn3D, ParticipantTo3D } from './types';

export class IntegrationParticipantsManager implements DefaultParticipantsOn3DManager {
  private _participant: ParticipantOn3D;
  private _participants: ParticipantOn3D[];

  public get participant(): ParticipantOn3D {
    return this._participant;
  }

  public get participants(): ParticipantOn3D[] {
    return this._participants;
  }

  /**
   * @function addParticipantToList
   * @description add participant list in 3D space
   * @param {ParticipantOn3D[]} participants
   * @returns {void}
   */
  public addParticipantToList = (participant: ParticipantOn3D): void => {
    if (!this._participants) {
      this._participants = [];
    }
    this._participants = [...this._participants, participant];
  };

  /**
   * @function setLocalParticipant
   * @description set current participant
   * @param {ParticipantOn3D} participant
   * @returns {void}
   */
  public setLocalParticipant = (participant: ParticipantOn3D): void => {
    this._participant = participant;
  };

  /**
   * @function createParticipantOn3D
   * @description Creates a participant object with properties for 3D space
   * @param {ParticipantTo3D} participant
   * @returns {ParticipantOn3D}
   */
  public createParticipantOn3D = ({ id, name, avatar, avatarConfig, isAudience }: ParticipantTo3D): ParticipantOn3D => {
    const participantOn3D: ParticipantOn3D = {
      id,
      name,
      avatar,
      isAudience,
      avatarConfig,
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

    return participantOn3D;
  };

  /**
   * @function removeParticipant
   * @description remove participant from list
   * @param {ParticipantOn3D} participant
   * @returns {void}
   */
  public removeParticipant = (participant: ParticipantOn3D): void => {
    this._participants = this._participants.filter((participantOnlist) => participantOnlist.id !== participant.id);
  };
}
