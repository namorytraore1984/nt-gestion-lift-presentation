import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  userNameText = 'Votre identifiant';
  userPasswordText = 'Votre mot de passe';
  constructor() { }

  ngOnInit(): void {
  }

}
