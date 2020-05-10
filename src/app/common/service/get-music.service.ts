import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetMusicService {
  apiRoot = 'https://itunes.apple.com/search';
  constructor(private http: HttpClient) { }

  getRecords(term: string) {
    const apiURL = `${this.apiRoot}?term=${term}&media=music&limit=10`;
    return this.http.get(apiURL);
  }
}
