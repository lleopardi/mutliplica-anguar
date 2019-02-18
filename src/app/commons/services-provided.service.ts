import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import ServiceBackend from './models/services.backend';

@Injectable({
  providedIn: 'root'
})
export class ServicesProvidedService {
  private api = `${environment.apiUrl}services/`;

  constructor(private http: HttpClient) { }

  public findAll(): Observable<ServiceBackend[]> {
    return this.http.get<ServiceBackend[]>(this.api);
  }

  public create(data: ServiceBackend): Observable<ServiceBackend> {
    return this.http.post<ServiceBackend>(this.api, data);
  }

  public delete(id: number): Observable<{}> {
    const apiDelete = `${this.api}${id}`;
    return this.http.delete(apiDelete);
  }

  public update(id: number, service: ServiceBackend): Observable<ServiceBackend> {
    const apiUpdate = `${this.api}${id}`;
    return this.http.put<ServiceBackend>(apiUpdate, service);
  }

}
