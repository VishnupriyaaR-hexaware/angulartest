import { Injectable } from "@angular/core";
import { ProjectClientEntityyyyyyyyy } from "./projectClientEntityyyyyyyyy";
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
export class ProjectClientEntityyyyyyyyyService {
  endpoint = "http://localhost:3000";
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
    }),
  };

  constructor(private httpClient: HttpClient) {}

  getProjectClientEntityyyyyyyyyById(id: any): Observable<any> {
    return this.httpClient
      .get(`${this.endpoint}/projectClientEntityyyyyyyyy/${id}`)
      .pipe(catchError(this.errorHandler));
  }

  getProjectClientEntityyyyyyyyy(): Observable<any> {
    return this.httpClient
      .get(`${this.endpoint}/projectClientEntityyyyyyyyy`)
      .pipe(catchError(this.errorHandler));
  }

  addProjectClientEntityyyyyyyyy(
    data: ProjectClientEntityyyyyyyyy
  ): Observable<any> {
    return this.httpClient
      .post(
        `${this.endpoint}/projectClientEntityyyyyyyyy`,
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(catchError(this.errorHandler));
  }

  editProjectClientEntityyyyyyyyy(
    id: any,
    data: ProjectClientEntityyyyyyyyy
  ): Observable<any> {
    return this.httpClient
      .put(
        `${this.endpoint}/projectClientEntityyyyyyyyy/${id}`,
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(catchError(this.errorHandler));
  }

  deleteProjectClientEntityyyyyyyyy(id: number): Observable<any> {
    return this.httpClient
      .delete(
        `${this.endpoint}/projectClientEntityyyyyyyyy/${id}`,
        this.httpOptions
      )
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
