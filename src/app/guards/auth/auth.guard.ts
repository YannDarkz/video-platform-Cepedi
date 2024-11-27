import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';

export const authGuard: CanActivateFn = (route, state) => {
  const auth = inject(AuthService);

  return auth.isAuthenticated$;
};
