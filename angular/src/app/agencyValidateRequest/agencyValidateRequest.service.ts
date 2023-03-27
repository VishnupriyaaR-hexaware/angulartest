import { Injectable } from "@angular/core";
import { AgencyValidateRequest } from "./agencyValidateRequest";
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
export class AgencyValidateRequestService {
  endpoint = "http://localhost:3000";
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
    }),
  };

  constructor(private httpClient: HttpClient) {}

  getAgencyValidateRequestById(id: any): Observable<any> {
    return this.httpClient
      .get(`${this.endpoint}/agencyValidateRequest/${id}`)
      .pipe(catchError(this.errorHandler));
  }

  getAgencyValidateRequest(): Observable<any> {
    return this.httpClient
      .get(`${this.endpoint}/agencyValidateRequest`)
      .pipe(catchError(this.errorHandler));
  }

  addAgencyValidateRequest(data: AgencyValidateRequest): Observable<any> {
    return this.httpClient
      .post(
        `${this.endpoint}/agencyValidateRequest`,
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(catchError(this.errorHandler));
  }

  editAgencyValidateRequest(
    id: any,
    data: AgencyValidateRequest
  ): Observable<any> {
    return this.httpClient
      .put(
        `${this.endpoint}/agencyValidateRequest/${id}`,
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(catchError(this.errorHandler));
  }

  deleteAgencyValidateRequest(id: number): Observable<any> {
    return this.httpClient
      .delete(`${this.endpoint}/agencyValidateRequest/${id}`, this.httpOptions)
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
