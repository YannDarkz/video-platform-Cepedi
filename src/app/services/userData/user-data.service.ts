import { Injectable } from '@angular/core';
import { AuthService, User } from '@auth0/auth0-angular';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators'
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  private userData = new BehaviorSubject<any | null>(null);  // Armazena o estado dos dados do usuário
  userData$ = this.userData.asObservable();  // Exposição dos dados como um Observable

  constructor(private authService: AuthService, private http: HttpClient) {}

  // Método para definir ou atualizar os dados do usuário
  setUserData(data: any) {
    this.userData.next(data);
  }

  // Método para acessar os dados do usuário como um Observable
  getUserData(): Observable<any | null> {
    return this.userData$;
  }

  getUserId() {
    return this.authService.user$.pipe(
      map((user) => user?.sub)

    )
  }
  
}
