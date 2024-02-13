import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {LoginModel} from "./api/model/login";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  // @ts-ignore
  loginForm: FormGroup;
  senhaErrada: boolean = false;
  // @ts-ignore
  user: LoginModel;

  constructor(private fb: FormBuilder, private router: Router) {
  }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required]],
      senha: ['', [Validators.required]]
    })
  }

  registrar() {
    this.router.navigateByUrl('/registro')
  }

  login() {
    // weu12@email.com
    // 123456
    this.user = Object.assign({}, this.user, this.loginForm.value);

    if (this.user.email === 'weu12@email.com' && this.user.senha === '123456'){
      this.router.navigateByUrl('/home')
    }
    else {
      this.senhaErrada = true;
    }
  }
}
