import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  auth: AuthService;
  constructor(private authP: AuthService, private router: Router) {
    this.auth = authP
  }

  ngOnInit() {
    this.auth.isAuthenticated$.subscribe((isAuthenticated) => {
      if (isAuthenticated) {
        this.router.navigate(['/home']);
        // if (isAuthenticated) {
        //   if (this.router.url === '/home') {
        //     return; 
        //   }
        // }
      }
    })


  }


  loginWithRedirect(): void {
    this.auth.loginWithRedirect();
  }

  logout(): void {
    this.auth.logout({ logoutParams: { returnTo: window.location.origin } })
  }

}
