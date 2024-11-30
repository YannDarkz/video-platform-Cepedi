import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { VideoService } from '../../services/videoService/video.service';
import { IVideo } from '../../interfaces/video.model';

@Component({
  selector: 'app-all-videos',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './all-videos.component.html',
  styleUrl: './all-videos.component.scss'
})
export class AllVideosComponent {
  videos: IVideo[] = [];

  constructor(private videoService: VideoService) {}

  handleClick(event: Event): void {
    event.preventDefault();
   
  }

  ngOnInit(): void {
    setTimeout(() => {this.videoService.getVideos().subscribe((data) => (this.videos = data));}, 3000 )
    // this.videoService.getVideos().subscribe((data) => (this.videos = data));
  }

}
