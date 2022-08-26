import { Injectable } from '@angular/core';

interface LoginData {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  login(loginData: LoginData) {
    if (
      loginData.email === 'admin@gmail.com' &&
      loginData.password === 'test@123'
    ) {
      const token = 'randomtokenstring';
      localStorage.setItem('token', token);
      return true;
    }
    return false;
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    if (token) {
      return true;
    }
    return false;
  }
}
