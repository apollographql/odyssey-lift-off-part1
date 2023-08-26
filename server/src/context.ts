import { TrackApi } from "./datasourses/track-api.js"

export type DataSourceContext = {
    dataSources: {
        trackApi: TrackApi
    }
}