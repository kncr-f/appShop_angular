import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  isLogin: boolean = false;
  constructor() {}

  ngOnInit(): void {}
  switchAccount(form: NgForm) {
    this.isLogin = !this.isLogin;
    form.resetForm();
  }

  handleSubmit(form: NgForm) {
    if (form.invalid) {
      return;
    }
    console.log(form.value);
  }
}
