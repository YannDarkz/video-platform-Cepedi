import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IVideo } from "../../interfaces/video.model";

export const selectVideosState = createFeatureSelector<{ videos: IVideo[] }>('videos');

export const selectVideoById = (id: string) =>
    createSelector(selectVideosState, (state) => {
        const video = state && state.videos ? state.videos.find((video) => video.id === id) : undefined
        console.log('Estado dos vídeos:', video);
        return video
    }
    );