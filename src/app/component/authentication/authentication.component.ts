import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../service/authentication/authentication.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

  state: boolean;

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
    this.state = this.authenticationService.state();
  }

  public logIn(): void {
    this.state = this.authenticationService.logIn();
  }

  public logOut(): void {
    this.state = this.authenticationService.logOut();
  }

}
