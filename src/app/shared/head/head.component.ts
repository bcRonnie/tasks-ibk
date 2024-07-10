import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { logout } from 'src/app/core/redux/auth/actions';
import { selectAuth } from 'src/app/core/redux/auth/selectors';
import { AppState } from 'src/app/core/redux/state';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit{
  
  constructor(
    private store: Store<AppState>,
    private router: Router
  ){}

  user: string = '';
  loggedIn: boolean = false;

  ngOnInit(): void {
    this.store.select(selectAuth).subscribe(
      (auth) => {
        this.user = auth.user;
        this.loggedIn = auth.loggedIn;
      }
    );
  }

  logout() {
    this.store.dispatch(logout());
    this.router.navigate(['']);
  }

}
