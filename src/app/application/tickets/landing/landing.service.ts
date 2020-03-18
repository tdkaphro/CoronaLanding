import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: "root"
})
export class LandingService {
  uri = "http://localhost:3000/api/ticket";
  constructor(private http: HttpClient) { }
  getTicketsByStateAndCity(state, city) {
    let params = new HttpParams();
    params = params.append("state", state);
    params = params.append("city", city);

    return this.http.get<any>(`${this.uri}/stateAndCity`, {
      params: params
    });
  }
  ajouterTicket(data) {
    return this.http.post<any>(`${this.uri}/ticket`, data);
  }
  postFile(fileToUpload: File): Observable<boolean> {
    const formData: FormData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);

    return this.http.post<any>(`${this.uri}/upload`, formData);
  }
}
