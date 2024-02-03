import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = `${environment.backendUrl}users`; // Replace with your server URL

  private loggedIn = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) {
    this.checkToken(); // Check if the user is already authenticated when AuthService is instantiated
  }

  // Method to log in the user
  login(username: string, password: string): Observable<any> {
    localStorage.removeItem('data');
    return this.http.post<any>(`${this.apiUrl}/login`, { username, password }).pipe(
      tap(response => {
        if (response.success) {
          localStorage.setItem('data', JSON.stringify(response.data)); // Store token in local storage
          this.loggedIn.next(true); // Update the BehaviorSubject to indicate the user is logged in
        }
      }),
      catchError(error => {
        alert(error.error.message);
        return throwError(error);
      })
    );
  }

  // Method to check if the user is logged in (can be used in guards or components)
  isLoggedIn(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }

  // Method to check if a token exists in local storage
  private checkToken(): void {
    const token = localStorage.getItem('data');
    if (token) {
      this.loggedIn.next(true);
    }
  }

  // Method to log out the user
  logout(): void {
    localStorage.removeItem('data'); // Remove token from local storage
    this.loggedIn.next(false); // Update the BehaviorSubject to indicate the user is logged out
  }
}
