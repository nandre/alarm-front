import {Injectable} from '@angular/core';
import {BackendService} from "../backend-service";
import {Http} from "@angular/http";
import {Observable} from "rxjs";
import { UrlSerializer } from '@angular/router';

@Injectable()
export class AlarmService extends BackendService {

  constructor(http: Http
  ) {
    super(http);
  }

  startAlarm(): Observable<any> {
    return this.get(`/alarm/start`);
  }

  stopAlarm(code:string): Observable<any> {
    return this.get(`/alarm/stop?code=` + code);
  }

}
