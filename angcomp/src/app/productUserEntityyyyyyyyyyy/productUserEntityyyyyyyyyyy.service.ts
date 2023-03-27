import { Injectable } from "@angular/core";
import { ProductUserEntityyyyyyyyyyy } from "./productUserEntityyyyyyyyyyy";
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
export class ProductUserEntityyyyyyyyyyyService {
  endpoint = "http://localhost:3000";
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
    }),
  };

  constructor(private httpClient: HttpClient) {}

  getProductUserEntityyyyyyyyyyyById(id: any): Observable<any> {
    return this.httpClient
      .get(`${this.endpoint}/productUserEntityyyyyyyyyyy/${id}`)
      .pipe(catchError(this.errorHandler));
  }

  getProductUserEntityyyyyyyyyyy(): Observable<any> {
    return this.httpClient
      .get(`${this.endpoint}/productUserEntityyyyyyyyyyy`)
      .pipe(catchError(this.errorHandler));
  }

  addProductUserEntityyyyyyyyyyy(
    data: ProductUserEntityyyyyyyyyyy
  ): Observable<any> {
    return this.httpClient
      .post(
        `${this.endpoint}/productUserEntityyyyyyyyyyy`,
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(catchError(this.errorHandler));
  }

  editProductUserEntityyyyyyyyyyy(
    id: any,
    data: ProductUserEntityyyyyyyyyyy
  ): Observable<any> {
    return this.httpClient
      .put(
        `${this.endpoint}/productUserEntityyyyyyyyyyy/${id}`,
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(catchError(this.errorHandler));
  }

  deleteProductUserEntityyyyyyyyyyy(id: number): Observable<any> {
    return this.httpClient
      .delete(
        `${this.endpoint}/productUserEntityyyyyyyyyyy/${id}`,
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
