import { Component } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { UserService } from './services/userService/user.service';
import { UserDataService } from './services/userData/user-data.service';
import { catchError, of, tap } from 'rxjs';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
// import { SideBarComponent } from './components/side-bar/side-bar.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, CommonModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'video-plataform';

  videos: any[] = []

  constructor(private auth: AuthService, private router: Router, private userService: UserService, private userDataService: UserDataService){}

  ngOnInit() {
    this.auth.isAuthenticated$.subscribe((isAuthenticated) => {
      if (isAuthenticated) {
        this.router.navigate(['/home']);

        this.auth.user$.subscribe(user => {
          // console.log("uzer", user)
  
          if (user) {
            // console.log("uzi app", user);
            const provider = user.sub ? this.getProvider(user.sub) : 'Unknown';
            
            const userData = {
              userId: user.sub ? user.sub.split('|')[1] : '',
              name: user.name || 'Usuário sem nome',
              email: user.email || '',
              picture: user.picture || '',
              socialLoginProvider: provider
            };
            this.userService.saveAutorizedUser(userData).subscribe({
              next: (savedUser) => {
                if (savedUser) {
                  this.userDataService.setUserData(savedUser);
                }
              }
            });
          }
        })
      }
    });
  }

  private getProvider(sub: string): string {
    if (sub.startsWith('google-oauth2')) return 'Google';
    return 'Unknown';
  }

  

}
