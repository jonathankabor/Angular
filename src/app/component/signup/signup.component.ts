import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  email: FormControl;
  password: FormControl;
  confirmation: FormControl;
  term: FormControl;

  form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    // new FormControl(default value, [Validators], [Asynchronous Validators])

    this.email = new FormControl();
    this.password = new FormControl();
    this.confirmation = new FormControl();
    this.term = new FormControl();

    this.form = this.fb.group({
      email: this.email,
      password: this.password,
      confirm: this.confirmation,
      term: this.term
    });
  }

}
