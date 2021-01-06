import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  showSpinner;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  login() {
    if (this.username == 'admin' && this.password == 'admin') {
      // this.router.navigate(['user']);
      alert('login efetivado');
    } else {
      alert('login ou passoword invalido!');
    }
  }
}
