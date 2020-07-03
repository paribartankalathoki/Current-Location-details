import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Location {
  latitude: string;
  longitude: string;
}

@Injectable({
  providedIn: 'root'
})
export class GeomapService {
  accessKey_givenBy_ipapi_account = 'Enter your access key given after account registration in the ipapi.com here';
  constructor(
    private httpClient: HttpClient
  ) { }

  getLocation() {
    return this.httpClient.get<Location>(`http://api/ipapi.com/api/check?access_key=${this.accessKey_givenBy_ipapi_account}`);
  }
}
