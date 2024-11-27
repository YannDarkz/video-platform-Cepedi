import { CanActivateFn } from '@angular/router';

export const emptyGuard: CanActivateFn = (route, state) => {
  return true;
};
