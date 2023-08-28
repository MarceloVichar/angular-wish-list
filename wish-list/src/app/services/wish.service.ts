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

  async getWish(id: number | string | null): Promise<Observable<Wish>> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  async createWish(wish: Wish): Promise<Observable<any>> {
    return this.http.post<any>(this.apiUrl, wish);
  }

  async editWish(id: number | string | null, wish: Wish): Promise<Observable<any>> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, wish);
  }

  async markAsReady(id: number | string | null): Promise<Observable<any>> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, { status: 'ready' });
  }

  async deleteWish(id: number | string | null): Promise<Observable<any>> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
