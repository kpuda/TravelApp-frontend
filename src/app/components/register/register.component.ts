import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ErrorResponseObject } from 'src/app/_objects/ErrorResponseObject';
import { ResponseObject } from 'src/app/_objects/ResponseObject';
import { AuthService } from 'src/app/_services/auth.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: any = {
    username: null,
    email: null,
    password: null
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService,private tokenStorage: TokenStorageService, private router: Router) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.router.navigate(['/homepage']);
    }
  }

  onSubmit(): void {
    const { username, email, password } = this.form;

    this.authService.register(username, email, password).subscribe(
      (response:ResponseObject) => {
        console.log(response.message);
        
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      (error:ErrorResponseObject) => {
        this.errorMessage = error.message;
        this.isSignUpFailed = true;
      }
    );
  }
}
