import { createAction, props } from "@ngrx/store";
import { IVideo } from "../../interfaces/video.model";

export const addLike = createAction(
    '[Video] Add Like',
    props<{ videoId: string;  }>()
  );
  
  export const addLikeSuccess = createAction(
    '[Video] Add Like Success',
    props<{ video: IVideo }>()
  );
  
  export const addLikeFailure = createAction(
    '[Video] Add Like Failure',
    props<{ error: any }>()
  );