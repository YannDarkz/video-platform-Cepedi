import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { IVideo } from '../../interfaces/video.model'; 

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  private apiUrl  = 'http://localhost:3000';

  constructor( private http: HttpClient) { }

  getVideosById(id: string): Observable<IVideo> {
    return this.http.get<IVideo>(`${this.apiUrl}/videos/${id}`);
  }

  getAllVideos(): Observable<IVideo[]> {
    return this.http.get<IVideo[]>(`${this.apiUrl}/videos`);
  }

  updateLikes(videoId: string, likes: number): Observable<IVideo> {
    return this.http.patch<IVideo>(`${this.apiUrl}/videos/${videoId}`, { likes });
  }
  
  updateViews(videoId: string, views: number): Observable<IVideo> {
    console.log('Chamando API para atualizar visualizações:', videoId, views);
    
    return this.http.patch<IVideo>(`${this.apiUrl}/videos/${videoId}`, { views });

  }

  getTopLikedVideos(limit: number): Observable<IVideo[]> {
    return this.http.get<IVideo[]>(`${this.apiUrl}/videos`).pipe(
      map((videos) =>
        videos
          .sort((a, b) => (b.likes || 0) - (a.likes || 0)) 
          .slice(0, limit) 
      )
    );
  }

  searchVideosByCategory(category: string): Observable<IVideo[]> {
    return this.http.get<IVideo[]>(`${this.apiUrl}/videos?category_like=${category}`);
  }

  getVideos(): Observable<IVideo[]> {
    return this.http.get<IVideo[]>(`${this.apiUrl}/videos`);
  }



  // updateLikedVideos(userId: number, videoId: string): Observable<any> {
  //   return this.http.patch(`http://localhost:3000/users/${userId}`, {
  //     likedVideos: [...likedVideos, videoId],
  //   });
  // }
}
