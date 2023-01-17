import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { NbAuthService } from '@nebular/auth';

@Injectable({
  providedIn: 'root'
})
export class ValidationLoginGuard implements CanActivate {
  constructor(private authService: NbAuthService,
              private router: Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return new Promise(resolve => {
      this.authService.isAuthenticated().subscribe(resp => {
        if (!resp) {
          this.router.navigate(['auth/login'])
        }
        resolve(resp);
      })
    })
  }

}
