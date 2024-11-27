import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { VideoService } from '../../services/videoService/video.service'; 
import { loadVideoById, loadVideoByIdSuccess, loadVideoByIdFailure } from '../actions/video.actions';
import { addLike, addLikeSuccess, addLikeFailure } from '../actions/like.action';
import { addView, addViewFailure, addViewSuccess } from '../actions/view.action';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { combineLatest, of, take, tap, filter } from 'rxjs';
import { selectVideoById, selectVideosState } from '../selectors/video.selectors';
import { IVideoState } from '../state/video.state';

@Injectable()
export class VideoEffects {
    constructor( private actions$: Actions, private videoService: VideoService, private store: Store<IVideoState>) {}

loadVideosById$ = createEffect(() => 
    this.actions$.pipe(
        ofType(loadVideoById),
        mergeMap((action) => 
        this.videoService.getVideosById(action.id).pipe(
            map((video) => loadVideoByIdSuccess({ video })),
            catchError((error) => of(loadVideoByIdFailure({ error })))
        ))
    )   
)

addLike$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addLike),
      mergeMap(({ videoId }) =>
        this.store.select(selectVideoById(videoId)).pipe(
          take(1),
          mergeMap((video) => {
            if (!video) {
              return of(addLikeFailure({ error: 'Video not found' }));
            }
            const updatedLikes = (video.likes || 0) + 1;
  
            return this.videoService.updateLikes(videoId, updatedLikes).pipe(
              map((updatedVideo) => addLikeSuccess({ video: updatedVideo })),
              catchError((error) => of(addLikeFailure({ error })))
            );
          })
        )
      )
    )
  );
  
  // Visualizações
  addView$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addView),
      tap((action) => console.log('Ação capturada no Effect:', action)),
      mergeMap(({ videoId }) =>
        this.store.select(selectVideoById(videoId)).pipe(
          filter((video) => !!video), // Ignora estados undefined
          take(1),
          mergeMap((video) => {
            const updatedViews = (video!.views || 0) + 1;
            console.log('Atualizando visualizações do vídeo:', videoId, updatedViews);
  
            return this.videoService.updateViews(videoId, updatedViews).pipe(
              map((updatedVideo) => addViewSuccess({ video: updatedVideo })),
              catchError((error) => of(addViewFailure({ error })))
            );
          })
        )
      )
    )
  );
}