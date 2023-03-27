import { Injectable } from "@angular/core";
import { AgencyRegisterRequest } from "./agencyRegisterRequest";
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
export class AgencyRegisterRequestService {
  endpoint = "http://localhost:3000";
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
    }),
  };

  constructor(private httpClient: HttpClient) {}

  getAgencyRegisterRequestById(id: any): Observable<any> {
    return this.httpClient
      .get(`${this.endpoint}/agencyRegisterRequest/${id}`)
      .pipe(catchError(this.errorHandler));
  }

  getAgencyRegisterRequest(): Observable<any> {
    return this.httpClient
      .get(`${this.endpoint}/agencyRegisterRequest`)
      .pipe(catchError(this.errorHandler));
  }

  addAgencyRegisterRequest(data: AgencyRegisterRequest): Observable<any> {
    return this.httpClient
      .post(
        `${this.endpoint}/agencyRegisterRequest`,
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(catchError(this.errorHandler));
  }

  editAgencyRegisterRequest(
    id: any,
    data: AgencyRegisterRequest
  ): Observable<any> {
    return this.httpClient
      .put(
        `${this.endpoint}/agencyRegisterRequest/${id}`,
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(catchError(this.errorHandler));
  }

  deleteAgencyRegisterRequest(id: number): Observable<any> {
    return this.httpClient
      .delete(`${this.endpoint}/agencyRegisterRequest/${id}`, this.httpOptions)
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
