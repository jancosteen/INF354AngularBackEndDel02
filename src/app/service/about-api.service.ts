import { Injectable } from "@angular/core";

import { Observable, of, throwError } from "rxjs";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from "@angular/common/http";
import { catchError, tap, map } from "rxjs/operators";
import { About } from "../components/about/about";

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
};
//api url
const apiUrl = "/api/Malaria/AllMalariaDetails";

@Injectable({
  providedIn: "root"
})
export class AboutApiService {
  constructor(private http: HttpClient) {}

  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  getAbouts(): Observable<About[]> {
    return this.http.get<About[]>(apiUrl).pipe(
      tap(heroes => console.log("fetched About")),
      catchError(this.handleError("getAbout", []))
    );
  }

  getAbout(id: number): Observable<About> {
    const url = `${apiUrl}/${id}`;
    return this.http.get<About>(url).pipe(
      tap(_ => console.log(`fetched about id=${id}`)),
      catchError(this.handleError<About>(`getAbout id=${id}`))
    );
  }

  addAbout(about): Observable<About> {
    return this.http.post<About>(apiUrl, about, httpOptions).pipe(
      tap((about: About) => console.log(`added about w/ id=${about.id}`)),
      catchError(this.handleError<About>("addAbout"))
    );
  }

  updateAbout(id, about): Observable<any> {
    const url = `${apiUrl}/${id}`;
    return this.http.put(url, about, httpOptions).pipe(
      tap(_ => console.log(`updated about id=${id}`)),
      catchError(this.handleError<any>("updateAbout"))
    );
  }

  deleteAbout(id): Observable<About> {
    const url = `${apiUrl}/${id}`;

    return this.http.delete<About>(url, httpOptions).pipe(
      tap(_ => console.log(`deleted about id=${id}`)),
      catchError(this.handleError<About>("deleteAbout"))
    );
  }
}
