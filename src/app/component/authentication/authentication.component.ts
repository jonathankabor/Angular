import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../service/authentication/authentication.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

  state: boolean;

  constructor(
    private authenticationService: AuthenticationService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.state = this.authenticationService.state();
  }

  public logIn(): void {
    this.state = this.authenticationService.logIn();

    if (this.route.snapshot.queryParamMap.has('back')) {
      this.router.navigateByUrl(this.route.snapshot.queryParamMap.get('back'));
    }

  }

  public logOut(): void {
    this.state = this.authenticationService.logOut();
  }

}
