import { createReducer, on } from "@ngrx/store";
import { IVideo } from "../../interfaces/video.model";
import { loadVideosSuccess, loadVideoByIdSuccess } from "../actions/video.actions";
import { addLikeSuccess } from "../actions/like.action";
import { addViewSuccess } from "../actions/view.action";

export interface VideoState {
    videos: IVideo[];
    selectedVideo?: IVideo;
    isLoaded: boolean;
}

const inicialState: VideoState = {
    videos: [],
    isLoaded: false

}

export const videoReducer = createReducer(
    inicialState,
    on(loadVideosSuccess, (state, { videos }) => ({ ...state, videos })),

    on(loadVideoByIdSuccess, (state, { video }) => {
        const updatedVideos = [...state.videos];
        const videoIndex = updatedVideos.findIndex((v) => v.id === video.id);

        if (videoIndex !== -1) {
            updatedVideos[videoIndex] = video;
        } else {
            updatedVideos.push(video);
        }

        return { ...state, videos: updatedVideos };
    }),

    on(addLikeSuccess, (state, { video }) => {
        const updatedVideos = state.videos.map((v) =>
            v.id === video.id ? { ...v, likes: video.likes } : v
        );
        return { ...state, videos: updatedVideos }
    }),

    on(addViewSuccess, (state, { video }) => ({
        ...state,
        videos: state.videos.map((v) => (v.id === video.id ? video : v)),
      }))

);