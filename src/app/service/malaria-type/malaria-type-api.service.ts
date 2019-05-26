import { Injectable } from "@angular/core";

import { Observable, of, throwError } from "rxjs";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from "@angular/common/http";
import { catchError, tap, map } from "rxjs/operators";
import { MalariaType } from "../../components/malaria-type/malaria-type/malaria-type";

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
};
//api url /api/malariatype/AllMalariaTypeDetails
const apiUrl = "/api/v1/products";

@Injectable({
  providedIn: "root"
})
export class MalariaTypeApiService {
  constructor(private http: HttpClient) { }

  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  getMalTs(): Observable<MalariaType[]> {
    return this.http.get<MalariaType[]>(apiUrl).pipe(
      tap(heroes => console.log("fetched malarieTypes")),
      catchError(this.handleError("getMalTs", []))
    );
  }

  getMalT(id: number): Observable<MalariaType> {
    const url = `${apiUrl}/${id}`;
    return this.http.get<MalariaType>(url).pipe(
      tap(_ => console.log(`fetched malariaType id=${id}`)),
      catchError(this.handleError<MalariaType>(`getMalT id=${id}`))
    );
  }

  addMalT(type): Observable<MalariaType> {
    return this.http.post<MalariaType>(apiUrl, type, httpOptions).pipe(
      tap((type: MalariaType) =>
        console.log(`added malariaType w/ id=${type.id}`)
      ),
      catchError(this.handleError<MalariaType>("addMalT"))
    );
  }

  updateMalT(id, type): Observable<any> {
    const url = `${apiUrl}/${id}`;
    return this.http.put(url, type, httpOptions).pipe(
      tap(_ => console.log(`updated type id=${id}`)),
      catchError(this.handleError<any>("updateMalT"))
    );
  }

  deleteMalT(id): Observable<MalariaType> {
    const url = `${apiUrl}/${id}`;

    return this.http.delete<MalariaType>(url, httpOptions).pipe(
      tap(_ => console.log(`deleted malariaType id=${id}`)),
      catchError(this.handleError<MalariaType>("deleteMalT"))
    );
  }
}
