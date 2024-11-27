import { Component } from '@angular/core';
import { SideBarComponent } from '../../components/side-bar/side-bar.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [SideBarComponent, CommonModule],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.scss'
})
export class FavoritesComponent {

}
