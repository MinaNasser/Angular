import { inject } from '@angular/core';
import { Router, type CanActivateFn } from '@angular/router';
import { UserAuthService } from '../services/userAuth.service';

export const authGuard: CanActivateFn = (route, state) => {
  let _userAuth = inject(UserAuthService);
  let router = inject(Router);

  if (_userAuth.getUserLoggedIn()) {
    return true;
  }
  else {
    // alert('Please login first');
    // window.location.href = '/login';
    router.navigateByUrl('/login');
    return false;
  }


};
