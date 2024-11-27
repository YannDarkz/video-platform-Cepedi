import { Component } from '@angular/core';
import { SideBarComponent } from '../../components/side-bar/side-bar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-like-videos',
  standalone: true,
  imports: [SideBarComponent, CommonModule],
  templateUrl: './like-videos.component.html',
  styleUrl: './like-videos.component.scss'
})
export class LikeVideosComponent {

}
