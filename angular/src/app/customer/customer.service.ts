import { Injectable } from "@angular/core";
import { Customer } from "./customer";
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
export class CustomerService {
  endpoint = "http://localhost:3000";
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
    }),
  };

  constructor(private httpClient: HttpClient) {}

  getCustomerById(id: any): Observable<any> {
    return this.httpClient
      .get(`${this.endpoint}/customer/${id}`)
      .pipe(catchError(this.errorHandler));
  }

  getCustomer(): Observable<any> {
    return this.httpClient
      .get(`${this.endpoint}/customer`)
      .pipe(catchError(this.errorHandler));
  }

  addCustomer(data: Customer): Observable<any> {
    return this.httpClient
      .post(`${this.endpoint}/customer`, JSON.stringify(data), this.httpOptions)
      .pipe(catchError(this.errorHandler));
  }

  editCustomer(id: any, data: Customer): Observable<any> {
    return this.httpClient
      .put(
        `${this.endpoint}/customer/${id}`,
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(catchError(this.errorHandler));
  }

  deleteCustomer(id: number): Observable<any> {
    return this.httpClient
      .delete(`${this.endpoint}/customer/${id}`, this.httpOptions)
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
