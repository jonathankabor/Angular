import { Component, OnInit } from '@angular/core';
import { User } from '../../interface/user';
import { UserService } from '../../service/user/user.service';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {

  users: User[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  public getUsers(): void {
    this.userService.findAll().subscribe( (users: User[]) => {
      /*console.log(users);
      console.log(typeof users[0]);*/
      this.users = users;
    });
  }

}
