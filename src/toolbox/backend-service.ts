import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Http, Headers, RequestOptions, Response, ResponseContentType} from "@angular/http";
import {environment} from "../environments/environment";

@Injectable()
export class BackendService {

  private _backendUrl: string = environment.backendUrl;
  private _http: Http;

  constructor(http: Http) {
    this._http = http;
  }

  protected get(path: String): Observable<any> {
    return this._http
      .get(`${this._backendUrl}${path}`, this.buildHeader(null))
      .map((response: Response) => this.handler(response));
  }

  protected post(path: String, body: any): Observable<any> {
    return this._http
      .post(`${this._backendUrl}${path}`, body, this.buildHeader(null))
      .map((response: Response) => this.handler(response));
  }

  protected put(path: String, body: any): Observable<any> {
    return this._http
      .put(`${this._backendUrl}${path}`, body, this.buildHeader(null))
      .map((response: Response) => this.handler(response));
  }



  private buildHeader(contentType: string) {
    const headerObject = {};

    if (contentType) {
      headerObject['Content-Type'] = contentType;
    }

    return new RequestOptions({headers: new Headers(headerObject)});
  }

  private handler(response: Response) {

    return response.json();
  }

}
