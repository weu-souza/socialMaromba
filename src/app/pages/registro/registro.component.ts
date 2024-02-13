import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {
  // @ts-ignore
  loginForm: FormGroup;
// @ts-ignore
  user: LoginModel;

  constructor(private fb: FormBuilder, private router: Router) {
  }

  ngOnInit(): void {
    this.createForm()
  }

  createForm() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required]],
      senha: ['', [Validators.required]],
      nome: ['', [Validators.required]],
      celular: ['', [Validators.required]],
      endereco: ['', [Validators.required]],
      nascimento: ['', [Validators.required]],
      academia: ['', [Validators.required]],
    })
  }

  voltar() {
    this.router.navigateByUrl('/login')
  }

  register() {
    this.user = Object.assign({}, this.user, this.loginForm.value);
    console.log(this.user)
  }
}
