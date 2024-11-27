import { Component, OnInit } from '@angular/core';
import { inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { UserService } from '../../services/userService/user.service';
import { UserDataService } from '../../services/userData/user-data.service';
import { AuthButtonsComponent } from '../auth-buttons/auth-buttons.component';
import { LogoutService } from '../../services/logout/logout.service';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss'
})
export class SideBarComponent implements OnInit {

  userData: any | null = null
  userId: string | undefined = undefined
  messageError = '';

  constructor( private auth: AuthService, private userService: UserService, private userDataService: UserDataService, private logout: LogoutService) {
  }

  ngOnInit(): void {
    this.userService.error$.subscribe((errorMsg) => {
      this.messageError = errorMsg;
    })

    this.userDataService.getUserData().subscribe( (data) => {
      this.userData = data;
      this.userId = data?.userId
      // console.log("dadosSide", data);
      
    })
  }

  private getProvider(sub: string): string {
    if (sub.startsWith('google-oauth2')) return 'Google';
    return 'Unknown';
  }


  logoutFn(): void {
    this.logout.logout()
  }


  isCollapsed = true;
  activeLink = '';

  toggleSidebar(): void {
    this.isCollapsed = !this.isCollapsed;
  }

  setActiveLink(link: string): void {
    this.activeLink = link;
    if (link === "logout"){
     this.logoutFn()
    }
  }



}
