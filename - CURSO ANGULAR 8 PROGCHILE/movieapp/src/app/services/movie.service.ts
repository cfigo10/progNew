import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from '../../environments/environment'
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  
  searchData = new BehaviorSubject<string>('');
  observableSearchData$ = this.searchData.asObservable();

  constructor(private http : HttpClient) { }

  nextData(){

  }
  
}
