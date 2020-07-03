import { Component } from '@angular/core';
import { GeomapService } from './service/geomap.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  lat: string = '';
  lng: string = '';

  constructor(
    private map: GeomapService
  ) {}

  ngOnInit() {
    this.map.getLocation().subscribe(
      res => {
        console.log('data: ', res);
        this.lat = res.latitude;
        this.lng = res.longitude;
      }, error => {
        console.log('error: ', error);
      }
    );
  }
}
