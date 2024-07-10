import { CanActivateFn, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../redux/state';
import { inject } from '@angular/core';
import { selectLoggedIn } from '../redux/auth/selectors';
import { of, switchMap, take } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {
  const store: Store<AppState> = inject(Store<AppState>);
  const router: Router = inject(Router);

  return store.select(selectLoggedIn).pipe(
    take(1),
    switchMap(
      (loggedin) => {
        if(loggedin) {
          return of(true);
        } else {
          router.navigate(['']);
          return of(false);
        }
      }
    )
  );

};
