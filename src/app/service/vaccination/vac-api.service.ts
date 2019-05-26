import { Injectable } from "@angular/core";

import { Observable, of, throwError } from "rxjs";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from "@angular/common/http";
import { catchError, tap, map } from "rxjs/operators";
import { Vaccination } from "../../components/vaccination/vaccination/vaccination";

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
};
//api url /api/Vaccination/AllVaccinationDetails
const apiUrl = "/api/v1/products";

@Injectable({
  providedIn: "root"
})
export class VacApiService {
  constructor(private http: HttpClient) { }

  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  getVacs(): Observable<Vaccination[]> {
    return this.http.get<Vaccination[]>(apiUrl).pipe(
      tap(heroes => console.log("fetched vaccinations")),
      catchError(this.handleError("getVac", []))
    );
  }

  getVac(id: number): Observable<Vaccination> {
    const url = `${apiUrl}/${id}`;
    return this.http.get<Vaccination>(url).pipe(
      tap(_ => console.log(`fetched vaccination id=${id}`)),
      catchError(this.handleError<Vaccination>(`getVac id=${id}`))
    );
  }

  addVac(vaccination): Observable<Vaccination> {
    return this.http.post<Vaccination>(apiUrl, vaccination, httpOptions).pipe(
      tap((vaccination: Vaccination) =>
        console.log(`added vaccination w/ id=${vaccination.id}`)
      ),
      catchError(this.handleError<Vaccination>("addVac"))
    );
  }

  updateVac(id, vaccination): Observable<any> {
    const url = `${apiUrl}/${id}`;
    return this.http.put(url, vaccination, httpOptions).pipe(
      tap(_ => console.log(`updated vaccination id=${id}`)),
      catchError(this.handleError<any>("updateVac"))
    );
  }

  deleteVac(id): Observable<Vaccination> {
    const url = `${apiUrl}/${id}`;

    return this.http.delete<Vaccination>(url, httpOptions).pipe(
      tap(_ => console.log(`deleted vaccination id=${id}`)),
      catchError(this.handleError<Vaccination>("deleteVac"))
    );
  }
}
