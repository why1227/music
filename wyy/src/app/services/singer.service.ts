import { HttpClient, HttpParams } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators';
import { Singer } from './data-types/common.types';
import { API_CONFIG } from './services.module';
// import queryString from 'query-string';


type SingerParams = {
  offest: number;
  limit: number;
  type: number;
  area: number;
}
const defaultParams: SingerParams = {
  offest: 0,
  limit: 9,
  type: 1,
  area: -1,
}
@Injectable({
  providedIn: 'root'
})
export class SingerService {

  constructor(private http: HttpClient, @Inject(API_CONFIG) private uri: string) { }
  getEnterSinger(args: SingerParams = defaultParams): Observable<Singer[]> {
    const params = new HttpParams({ fromString: JSON.stringify(args) })
    return this.http.get(this.uri + 'artist/list', { params })
      .pipe(map((res: any) => res.artists))
  }
}
