import { Injectable } from '@angular/core';
import { UserLayoutComponent } from 'src/app/layouts/user-layout/user-layout.component';
import { AppUser } from '../models/app-user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private authenticatedUser?: AppUser;

  constructor() { }

  loginUser(userName: string, password: string): void {
    this.authenticatedUser = {
      userName : userName,
      firstName: 'namory',
      lastName: 'traore',
      privilege: 'user'
    };
  }

  isAuthenticated(): boolean {
    return !!this.authenticatedUser;
  }

  isSimpleUser(): boolean {
    return this.authenticatedUser?.privilege === 'user';
  }

  isAdminUser(): boolean {
    return this.authenticatedUser?.privilege === 'admin';
  }

  getLoggedUserFullName(): string | undefined {
    return this.authenticatedUser?.firstName || '' || this.authenticatedUser?.lastName;
  }
}
