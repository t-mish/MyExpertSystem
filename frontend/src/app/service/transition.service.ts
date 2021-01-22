import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Transition} from "../model/transition";

@Injectable({
  providedIn: 'root'
})
export class TransitionService {

  private transitionsUrl: string;

  static readonly PLANTS_URL: string = 'https://myexpertsystem.tk/plants';
  static readonly DOGS_URL: string = 'https://myexpertsystem.tk/dogs';
  static readonly CAMERAS_URL: string = 'https://myexpertsystem.tk/cameras';

  constructor(private http: HttpClient) {
    this.transitionsUrl = TransitionService.CAMERAS_URL;
  }

  setTransitionUrl(url: string): void {
    this.transitionsUrl = url;
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
