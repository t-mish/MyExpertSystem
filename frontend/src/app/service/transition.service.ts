import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Transition} from "../model/transition";

@Injectable({
  providedIn: 'root'
})
export class TransitionService {

  private transitionsUrl: string;

  constructor(private http: HttpClient) {
    this.transitionsUrl = 'https://myexpertsystem.tk/cameras';
  }

  findFirst(): Observable<Transition[]> {
    return this.http.get<Transition[]>(this.transitionsUrl);
  }

  findById(id: number): Observable<Transition[]> {
    return this.http.get<Transition[]>(this.transitionsUrl + '/' + id);
  }

  findAll(): Observable<Transition[]> {
    return this.http.get<Transition[]>(this.transitionsUrl);
  }
}
