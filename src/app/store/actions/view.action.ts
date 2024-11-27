import { createAction, props } from "@ngrx/store";
import { IVideo } from "../../interfaces/video.model";

export const addView = createAction(
    '[Video] Add View',
    props<{ videoId: string;  }>()
  );
  
  export const addViewSuccess = createAction(
    '[Video] Add View Success',
    props<{ video: IVideo }>()
  );
  
  export const addViewFailure = createAction(
    '[Video] Add View Failure',
    props<{ error: any }>()
  );