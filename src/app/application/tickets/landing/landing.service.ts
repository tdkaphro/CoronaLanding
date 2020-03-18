import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class LandingService {
  uri = "http://localhost:3000/api/ticket";
  constructor(private http: HttpClient) {}
  getTicketsByStateAndCity(state, city,type) {
    let params = new HttpParams();
    params = params.append("state", state);
    params = params.append("city", city);
    params = params.append("type", type);

    return this.http.get<any>(`${this.uri}/stateAndCity`, {
      params: params
    });
  }
  ajouterTicket(data) {
    return this.http.post<any>(`${this.uri}/ticket`, data);
  }

  ajouterAprovel(data){
    return this.http.post<any>(`${this.uri}/aprovel`, data);
  }

  UpdateAprovel(id,data){
    return this.http.put<any>(`${this.uri}/aprovel/${id}`, data);
  }

  UpdateTicket(id,data){
    return this.http.put<any>(`${this.uri}/ticket/${id}`, data);
  }

  getConfirmCount(id){
    let confirm = 0;
    this.http.get<any>(`${this.uri}/aprovel_count/${id}`).subscribe((res)=>{
      confirm = res[0];
    })
    return confirm;
  }
}
