import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { AppState } from '../redux/state';
import { selectLoggedIn } from '../redux/auth/selectors';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private store: Store<AppState>
  ) { }

  login(user: string, password: string): Observable<Boolean> {
    return of(user === password);
  }

}
