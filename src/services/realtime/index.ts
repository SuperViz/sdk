import PhotonRealtimeService from './photon';

export default class RealtimeService {
  static build(): PhotonRealtimeService {
    return new PhotonRealtimeService();
  }
}
