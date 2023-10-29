import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApidataService {
  private apiUrl = `https://api.api-ninjas.com/v1/exercises`;

  constructor(private http: HttpClient) { }

  getExercises(muscle:string): Observable<any> {
    //const headers = new HttpHeaders();
    
    const url = `${this.apiUrl}?muscle=${muscle}`;
    return this.http.get<any>(url)
      .pipe(
        catchError((error) => {
          console.error('Une erreur s\'est produite lors de la requête HTTP :', error);
          return throwError('Erreur lors de la requête HTTP.');
        })
      );
  }
}