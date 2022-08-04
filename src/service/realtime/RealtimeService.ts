import PhotonRealtimeService from './photon/PhotonRealtimeService';

export default class RealtimeService {
  static build(): PhotonRealtimeService {
    return new PhotonRealtimeService();
  }
}
