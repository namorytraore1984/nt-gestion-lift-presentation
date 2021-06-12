import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  userName?: string;
  password?: string;
  rememberMe?: boolean;
  isLoginFormNotValid = false;

  userNameText = 'Votre identifiant';
  userPasswordText = 'Votre mot de passe';
  rememberMeText = 'Se souvenir de moi'

  constructor(private authService: AuthenticationService, private router: Router) { }

  ngOnInit(): void {
  }

  login(loginForm: NgForm): void {
    if (loginForm.invalid) {
      this.isLoginFormNotValid = true;
      return;
    }
    this.isLoginFormNotValid = false;
    this.authService.loginUser(loginForm.value.userName, loginForm.value.password);
    if (this.authService.isAuthenticated()) {
      if (this.authService.isSimpleUser()) {
        this.router.navigate(['/user']);
      } else if (this.authService.isAdminUser()) {
        this.router.navigate(['/admin']);
      } else {
        // Navigate vers la page d'erreur
      }
    } else {
      this.isLoginFormNotValid = true;
      return;
    }
  }

}
