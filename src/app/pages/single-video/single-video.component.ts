import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IVideo } from '../../interfaces/video.model';
import { loadVideoById } from '../../store/actions/video.actions';
import { selectVideoById } from '../../store/selectors/video.selectors';
import { CommonModule } from '@angular/common';
import { addView } from '../../store/actions/view.action';
import { addLike } from '../../store/actions/like.action';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-single-video',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './single-video.component.html',
  styleUrl: './single-video.component.scss'
})
export class SingleVideoComponent {

  video$!: Observable<IVideo | undefined>;

  constructor(
    private route: ActivatedRoute,
    private store: Store,
    private sanitizer: DomSanitizer
  ) {}

 getEmbedUrl(url: string): SafeResourceUrl {
  const videoId = this.extractVideoId(url);
  const embedUrl = `https://www.youtube.com/embed/${videoId}`;
  return this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl);
}


private extractVideoId(url: string): string | null {
  const regExp = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  const match = url.match(regExp);
  return match ? match[1] : null;
}


  ngOnInit(): void {
    const videoId = this.route.snapshot.paramMap.get('id');
    console.log('Video ID capturado:', videoId);
    if (videoId) {
      this.store.dispatch(loadVideoById({ id: videoId }));

      this.video$ = this.store.select(selectVideoById(videoId));

      this.store.dispatch(addView({ videoId }));
    }
  }

  handleClick(event: Event): void {
    event.preventDefault();
   
  }

  likeVideo(videoId: string): void {
    this.store.dispatch(addLike({ videoId }));
  }

}
