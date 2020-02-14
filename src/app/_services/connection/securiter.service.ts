import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginModel } from 'src/app/_models/loginModel';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from 'src/app/_models/user';

@Injectable({
  providedIn: 'root'
})
export class SecuriterService {

  constructor(
    private httpClient: HttpClient
  ) { }
  login(model: LoginModel): Observable<string> {
    console.log(environment.apiEndPoint + '/api/User/log',
    model)
    return this.httpClient.post<string>(
      environment.apiEndPoint + '/api/User/log',
      model
    );
  }
  register(model: User): Observable<string> {
    return this.httpClient.post<string>(
      environment.apiEndPoint + '/api/User/reg',
      model
    );
  }
}
