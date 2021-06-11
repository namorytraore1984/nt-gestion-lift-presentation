import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

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

  constructor() { }

  ngOnInit(): void {
  }

  login(loginForm: NgForm): void {
    if (loginForm.invalid) {
      this.isLoginFormNotValid = true;
      return;
    }
    this.isLoginFormNotValid = false;
    console.log('Les valeurs fourni par le user');
    console.log(loginForm.value);
  }

}
