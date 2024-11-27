import { Component } from '@angular/core';
import { SideBarComponent } from '../../components/side-bar/side-bar.component';
import { IVideo } from '../../interfaces/video.model';
import { VideoService } from '../../services/videoService/video.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged, switchMap, map } from 'rxjs/operators';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SideBarComponent, CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  searchForm: FormGroup;
  searchResults: IVideo[] = [];
  topVideos: IVideo[] = [];

  constructor(private videoService: VideoService, private fb: FormBuilder) {
    this.searchForm = this.fb.group({
      search: ['']
    });
  }

  ngOnInit(): void {
    this.loadTopLikedVideos();

    this.searchForm.get('search')?.valueChanges.pipe(
      debounceTime(300), // Aguarda o usuário parar de digitar por 300ms
      distinctUntilChanged(), // Evita requisições para o mesmo valor
      switchMap((query: string) => {
        if (query.trim() === '') {
          this.searchResults = [];
          return [];
        }
        return this.videoService.searchVideosByCategory(query);
      }),
      map((videos) => 
        videos.filter((video) => 
          video.category.toLowerCase() === this.searchForm.get('search')?.value.trim().toLowerCase()
        )
      )
    ).subscribe({
      next: (videos) => (this.searchResults = videos),
      error: (err) => console.error('Erro ao buscar vídeos:', err)
    });
  }


  private loadTopLikedVideos(): void {
    this.videoService.getTopLikedVideos(3).subscribe({
      next: (videos) => (this.topVideos = videos),
      error: (err) => console.error('Erro ao buscar vídeos mais curtidos', err),
    });
  }

}
