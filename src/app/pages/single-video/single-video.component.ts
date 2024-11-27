import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IVideo } from '../../interfaces/video.model';
import { loadVideoById } from '../../store/actions/video.actions';
import { selectVideoById } from '../../store/selectors/video.selectors';
import { CommonModule } from '@angular/common';
import { addView } from '../../store/actions/view.action';
import { addLike } from '../../store/actions/like.action';

@Component({
  selector: 'app-single-video',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './single-video.component.html',
  styleUrl: './single-video.component.scss'
})
export class SingleVideoComponent {

  video$!: Observable<IVideo | undefined>;

  constructor(
    private route: ActivatedRoute,
    private store: Store
  ) {}

  ngOnInit(): void {
    const videoId = this.route.snapshot.paramMap.get('id');
    console.log('Video ID capturado:', videoId);
    if (videoId) {
      this.store.dispatch(loadVideoById({ id: videoId }));

      this.video$ = this.store.select(selectVideoById(videoId));
console.log('doidera');

      this.store.dispatch(addView({ videoId }));
    }
  }

  likeVideo(videoId: string): void {
    this.store.dispatch(addLike({ videoId }));
  }

}
