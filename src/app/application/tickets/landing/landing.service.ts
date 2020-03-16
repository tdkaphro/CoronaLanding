import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";


@Injectable({
  providedIn: 'root'
})
export class LandingService {
  uri = "http://localhost:3000/api/ticket";
  constructor(private http: HttpClient) {

  }
  getTicketsByStateAndCity(state, city) {
    let params = new HttpParams();
    params = params.append("state", state);
    params = params.append("city", city);

    return this.http.get<any>(`${this.uri}/byStateAndCity`, {
      params: params
    });
  }
  ajouterTicket(data) {
    return this.http.post<any>(`${this.uri}/ticket`, data);
  }
}
