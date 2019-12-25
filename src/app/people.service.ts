import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Person } from './models/person.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  //private url: string = "/assets/data/people.json";
  private url: string = "http://dev.dbranch.asseco.rs/v1/party/parties/search?q=123&page-size=10";

  constructor(private httpClient: HttpClient) { }

  /*getPeople() {
    return this.httpClient.get<Person[]>(this.url);
  }*/
  getPeople(): Observable<any> {
    return this.httpClient.get<any>(this.url);
  }

}
