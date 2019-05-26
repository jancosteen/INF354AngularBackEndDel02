import { Injectable } from "@angular/core";

import { Observable, of, throwError } from "rxjs";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from "@angular/common/http";
import { catchError, tap, map } from "rxjs/operators";
import { Cause } from "../../components/causes/causes/cause";

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
};
//api url /api/v1/products /api/Cause/AllCauseDetails
const apiUrl = "/api/v1/products";

@Injectable({
  providedIn: "root"
})
export class CausesApiService {
  constructor(private http: HttpClient) { }

  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  getCauses(): Observable<Cause[]> {
    return this.http.get<Cause[]>(apiUrl).pipe(
      tap(heroes => console.log("fetched causes")),
      catchError(this.handleError("getCauses", []))
    );
  }

  getCause(id: number): Observable<Cause> {
    const url = `${apiUrl}/${id}`;
    return this.http.get<Cause>(url).pipe(
      tap(_ => console.log(`fetched cause id=${id}`)),
      catchError(this.handleError<Cause>(`getCause id=${id}`))
    );
  }

  addCause(cause): Observable<Cause> {
    return this.http.post<Cause>(apiUrl, cause, httpOptions).pipe(
      tap((cause: Cause) => console.log(`added cause w/ id=${cause.id}`)),
      catchError(this.handleError<Cause>("addCause"))
    );
  }

  updateCause(id, cause): Observable<any> {
    const url = `${apiUrl}/${id}`;
    return this.http.put(url, cause, httpOptions).pipe(
      tap(_ => console.log(`updated cause id=${id}`)),
      catchError(this.handleError<any>("updateCause"))
    );
  }

  deleteCause(id): Observable<Cause> {
    const url = `${apiUrl}/${id}`;

    return this.http.delete<Cause>(url, httpOptions).pipe(
      tap(_ => console.log(`deleted cause id=${id}`)),
      catchError(this.handleError<Cause>("deleteCause"))
    );
  }
}
