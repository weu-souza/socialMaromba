export class LoginModel {
// @ts-ignore
  private _email: string;
  // @ts-ignore
  private _senha: string;
  // @ts-ignore
  private _nome: string;
  // @ts-ignore
  private _celular: string;
  // @ts-ignore
  private _endereco: string;
  // @ts-ignore
  private _nascimento: string;
  // @ts-ignore
  private _academia: string;


  get email(): string {
    return this._email;
  }

  get senha(): string {
    return this._senha;
  }


  get nome(): string {
    return this._nome;
  }

  get celular(): string {
    return this._celular;
  }

  get endereco(): string {
    return this._endereco;
  }

  get nascimento(): string {
    return this._nascimento;
  }

  get academia(): string {
    return this._academia;
  }

}
