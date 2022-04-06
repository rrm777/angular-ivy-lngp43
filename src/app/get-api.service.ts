import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class GetApiService{
  constructor(
    private http:HttpClient
  ) { }

  apiCall()
  {
    return this.http.get('https://nut1dkct56.execute-api.us-east-1.amazonaws.com/teststage')
  }
}