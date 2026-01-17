import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '@errormanagement/data-access-auth';

export const noAuthGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const authService = inject(AuthService);

  const isLoggedIn = authService.isLoggedIn();
  console.log('NoAuthGuard - isLoggedIn:', isLoggedIn);
  if (isLoggedIn === true) {
    return router.parseUrl('/applications/hub');
  }
  // Allow access to login if not logged in or status unknown
  return true;
};
