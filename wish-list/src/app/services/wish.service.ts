import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Wish} from "../interfaces/wish";

@Injectable({
  providedIn: 'root'
})
export class WishService {
  private apiUrl = `${environment.apiUrl}/wishes`;

  constructor(private http: HttpClient) { }

  async getWishes(params?: any): Promise<Observable<Wish[]>> {
    return this.http.get<any[]>(this.apiUrl, {params});
  }

  async createWish(wish: Wish): Promise<Observable<any>> {
    return this.http.post<any>(this.apiUrl, wish);
  }
}
