import { IVideo } from "../../interfaces/video.model";

export interface IVideoState {
    videos: IVideo[];
}

export const inicialState: IVideoState = {
    videos: [],
}

