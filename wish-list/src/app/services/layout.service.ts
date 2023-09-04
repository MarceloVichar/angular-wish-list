import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {
  public simpleEmitter: EventEmitter<any> = new EventEmitter<any>();
}
