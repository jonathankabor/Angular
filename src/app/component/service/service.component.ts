import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Rot13Service } from '../../service/rot13/rot13.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  /*private title: Title;

  constructor(title: Title) {
    this.title = title;
  }*/

  message: string;
  encrypted: string;

  constructor(private title: Title, private rot13: Rot13Service) { }

  ngOnInit(): void {
    this.title.setTitle('Les Services | Formation Angular - Dawan - Avril 2020');
  }

  public crypter(): void {
    this.encrypted = this.rot13.transform(this.message);
  }

}
