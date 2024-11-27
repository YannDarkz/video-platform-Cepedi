import { Component } from '@angular/core';
import { SideBarComponent } from "../../components/side-bar/side-bar.component";

@Component({
  selector: 'app-see-later',
  standalone: true,
  imports: [SideBarComponent],
  templateUrl: './see-later.component.html',
  styleUrl: './see-later.component.scss'
})
export class SeeLaterComponent {

}
