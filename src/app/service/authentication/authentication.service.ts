import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private static readonly KEY = 'authentication';

  constructor() { }

  public logIn(): boolean {
    localStorage.setItem(AuthenticationService.KEY, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c');
    return true;
  }

  public state(): boolean {
    return localStorage.getItem(AuthenticationService.KEY) !== null;
  }

  public logOut(): boolean {
    localStorage.removeItem(AuthenticationService.KEY);
    return false;
  }
}
