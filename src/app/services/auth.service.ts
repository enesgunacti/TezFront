import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginModel } from 'app/models/loginModel';

import { SingleResponseModel } from 'app/models/singleResponseModel';
import { TokenModel } from 'app/models/tokenModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl="https://localhost:44336/api/auth/";
  constructor(private httpClien:HttpClient) { }
  login(loginModel:LoginModel){
    return this.httpClien.post<SingleResponseModel<TokenModel>>(this.apiUrl+"login",loginModel)

  }

  isAuthanticated(){
    if(localStorage.getItem("token")){
      return true;
    }
    else{
      return false;
    }
  }
}
