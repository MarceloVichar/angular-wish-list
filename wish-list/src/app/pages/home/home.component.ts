import { Component } from '@angular/core';
import {Wish} from "../../interfaces/wish";
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  data: Wish[] = [
    {
      name: '231',
      month: '432',
      description: 'Descricao',
      price: 23,
      id: 43
    }
  ]

  constructor(private router: Router) {}

  showItem(id: string | number) {
    this.router.navigate(['wish', id])
  }
}
