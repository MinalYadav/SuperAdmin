import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const token = localStorage.getItem('authToken'); 
  const router = inject(Router);
  
  if (token) {
    return true;  // Allow access
  } else {
    router.navigate(['login']);  // Redirect to sign-in page if not authenticated
    return false;
  }
};
