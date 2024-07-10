import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { RegexConstants } from 'src/app/core/constants/RegexConstants';
import { login } from 'src/app/core/redux/auth/actions';
import { selectAuth } from 'src/app/core/redux/auth/selectors';
import { AppState } from 'src/app/core/redux/state';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private authService: AuthService,
    private router: Router,
    private store: Store<AppState>
  ) {}

  loginForm!: FormGroup;
  subscriptions: Subscription[] = [];

  ngOnInit(): void {
    this.initForm();
    this.store.select(selectAuth).subscribe(
      (response) => {
        console.log(response)
      }
    );
  }

  initForm() {
    this.loginForm = this.formBuilder.group(
      {
        user: ['', 
          [Validators.required,
            Validators.minLength(6),
            Validators.maxLength(50),
            Validators.pattern(RegexConstants.ALPHA_NUMERIC)]
        ],
        password: ['',
          [Validators.required,
            Validators.minLength(6),
          ]
        ]
      }
    );
  }

  onSubmitLogin() {
    if(this.loginForm.valid) {
      const user = this.loginForm.get('user')?.value;
      const password = this.loginForm.get('password')?.value;

      const subscriptionLogin = this.authService.login(user, password).subscribe(
        {
          next: (success) => {
            if(success) {
              this.store.dispatch(login({user}));
              this.router.navigate(['/tasks']);
            }else {
              this.toastr.error('El usuario y contraseña no coincide.');        
            }
          },
          error: (error) => {
            this.toastr.error(error);
          },
          complete: () => {
            console.log('completo el login')
          }
        }
      );

      this.subscriptions.push(subscriptionLogin);  

    } else {
      this.toastr.error('ingrese el usuario y contraseña.');
    }
    
  }

  ngOnDestroy() {
    this.subscriptions.forEach( sub => sub.unsubscribe() );
}
}
