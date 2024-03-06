import { HttpClient, HttpErrorResponse  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(private http:HttpClient){ }

  getNoticias(parametros:any): Observable<any>
  {
    const URL='https://newsapi.org/v2/top-headlines?country='+parametros.pais+'&category='+parametros.categoria+'&apiKey=081fbabe20154e3498974fe0f0dcfc6e'
    return this.http.get(URL);

  }
}
