import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  isLogin: boolean = true;
  constructor(private autService: AuthService) {}

  ngOnInit(): void {}
  switchAccount(form: NgForm) {
    this.isLogin = !this.isLogin;
    form.resetForm();
  }

  handleSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    console.log(form.value);

    const email = form.value.email;
    const password = form.value.password;

    if (this.isLogin) {
      console.log('login mode on...');
    } else {
      this.autService.register(email, password).subscribe((data) => {
        console.log(data);
      });
    }
  }
}
