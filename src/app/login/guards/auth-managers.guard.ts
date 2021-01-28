import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticateService } from '../services/authenticate.service';

@Injectable({
  providedIn: 'root'
})
export class AuthManagersGuard implements CanActivate {
  constructor(private _authenticateService: AuthenticateService, private router : Router) { }
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this._authenticateService.isAdmin() || this._authenticateService.isGroendienst()) {
      return true;
    } else {
      this.router.navigate(['/login']);
    }
  }
}
