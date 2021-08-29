import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppConfig } from '../app-config';
import { Apollo, gql } from 'apollo-angular';

import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class RoutineService {

  private appConfig: AppConfig = new AppConfig();
  private httpHeaders: HttpHeaders = new HttpHeaders();

  constructor(
    private http: HttpClient,
    private apollo: Apollo
  ) { 
    // this.httpHeaders = new HttpHeaders({ 
    //   'Authorization' : sessionStorage.getItem('jwt'),
    //   'Access-Control-Allow-Origin': 'http://localhost'
    // });
  }

  getRoutines(date: string) {
    //return this.http.get(`${this.appConfig.apiUrl}/categories/routines`, { headers: this.httpHeaders });
    return this.http.get(`${this.appConfig.apiUrl}/categories/routinesbyday?date=${date}`);
  }

  queryRoutines() {
    return this.apollo.watchQuery({
      query: gql`
        {
          routinesByDay {
            routines{
              name
            }
            category{
              name
            }
          }
        }
      `,
    })
    .valueChanges
    .pipe(map(data => {
      return data?.data?.["routinesByDay"]
    }));
  }
}
