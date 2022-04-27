import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable, timer, of, tap, map } from 'rxjs';

@Injectable()
export class AdminGuard implements CanActivate {
  // canActivate method is executed for the routes which has guards

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    let result: boolean;
    // timer(1000)
    of(1)
      // timer will emit 0 as observable after a second
      .pipe(map((v) => !!v))
      // we are piping the observable and converting it to Boolean false
      .subscribe((grantAccess) => {
        result = grantAccess;
        if (!result) {
          alert('Only admin has access');
        }
      });
    return result;
  }
}
