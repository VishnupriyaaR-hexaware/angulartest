import { Injectable } from "@angular/core";
import { SecretAnswer } from "./secretAnswer";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class SecretAnswerService {
  endpoint = "http://localhost:3000";
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
    }),
  };

  constructor(private httpClient: HttpClient) {}

  getSecretAnswerById(id: any): Observable<any> {
    return this.httpClient
      .get(`${this.endpoint}/secretAnswer/${id}`)
      .pipe(catchError(this.errorHandler));
  }

  getSecretAnswer(): Observable<any> {
    return this.httpClient
      .get(`${this.endpoint}/secretAnswer`)
      .pipe(catchError(this.errorHandler));
  }

  addSecretAnswer(data: SecretAnswer): Observable<any> {
    return this.httpClient
      .post(
        `${this.endpoint}/secretAnswer`,
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(catchError(this.errorHandler));
  }

  editSecretAnswer(id: any, data: SecretAnswer): Observable<any> {
    return this.httpClient
      .put(
        `${this.endpoint}/secretAnswer/${id}`,
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(catchError(this.errorHandler));
  }

  deleteSecretAnswer(id: number): Observable<any> {
    return this.httpClient
      .delete(`${this.endpoint}/secretAnswer/${id}`, this.httpOptions)
      .pipe(catchError(this.errorHandler));
  }

  // Error handling
  errorHandler(error: HttpErrorResponse) {
    let errorMessage = "";
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
