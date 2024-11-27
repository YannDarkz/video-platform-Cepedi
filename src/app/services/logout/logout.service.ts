import { Injectable } from '@angular/core';
import { AuthService as Auth0Service } from '@auth0/auth0-angular';


@Injectable({
  providedIn: 'root'
})
export class LogoutService {

  constructor(private auth0Service: Auth0Service) {}
  logout(): void {
    this.auth0Service.logout({ logoutParams: { returnTo: window.location.origin } });
  }
}
