import { createAction, props } from "@ngrx/store";
import { IVideo } from "../../interfaces/video.model";

export const loadVideoById = createAction(
    '[Video] Load Video By ID',
    props<{ id: string }>()
  );

  export const loadVideoByIdSuccess = createAction(
    '[Video] Load Video By ID Success',
    props<{ video: IVideo }>()
  );
  
  export const loadVideoByIdFailure = createAction(
    '[Video] Load Video By ID Failure',
    props<{ error: string }>()
  );

export const loadVideos = createAction(
    '[Video] Load Videos'
);

export const loadVideosSuccess = createAction(
    '[Video] Load Videos Success', props<{ videos: IVideo[] }>()
);

export const loadVideosFailure = createAction(
    '[vide] Load Videos Failure', props<{ error: any }>()
);


export const addLike = createAction(
    '[Video] Add Like',
    props<{ userId: string; videoId: string; likes: number }>()
  );

  export const addLikeSuccess = createAction(
    '[Video] Add Like Success',
    props<{ video: IVideo }>()
  );
  
  export const addLikeFailure = createAction(
    '[Video] Add Like Failure',
    props<{ error: any }>()
  );

  export const addView = createAction(
    '[Video] Add View',
    props<{ videoId: string; views: number }>() // Incluindo a quantidade de visualizações
  );
  
  export const addViewSuccess = createAction(
    '[Video] Add View Success',
    props<{ video: IVideo }>()
  );
  
  export const addViewFailure = createAction(
    '[Video] Add View Failure',
    props<{ error: any }>()
  );
  
  
  export const removeLike = createAction(
    '[Video] Remove Like',
    props<{ userId: string; videoId: string }>()
  );
  
   
  export const addToFavorites = createAction(
    '[Video] Add to Favorites',
    props<{ userId: string; videoId: string }>()
  );
  
  
  export const removeFromFavorites = createAction(
    '[Video] Remove from Favorites',
    props<{ userId: string; videoId: string }>()
  );