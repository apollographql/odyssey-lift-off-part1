import { RESTDataSource } from 'apollo-datasource-rest';

class TrackAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'https://odyssey-lift-off-rest-api.herokuapp.com/';
    }

    getTracksForHome() {
        return this.get('tracks');
    }

    getTrack(trackId) {
        return this.get(`track/${trackId}`);
    }

    getAuthor(authorId) {
        return this.get(`author/${authorId}`);
    }

    getTrackModules(trackId) {
        return this.get(`track/${trackId}/modules`);
    }

    incrementTrackViews(trackId) {
        return this.patch(`track/${trackId}/numberOfViews`);
    }
}
export default TrackAPI;