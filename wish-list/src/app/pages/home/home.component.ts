import {Component} from '@angular/core';
import {Wish} from "../../interfaces/wish";
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  data: Wish[] = []

  ngOnInit() {
    let wishList = []
    const wishListInStorage = localStorage.getItem('wishList')
    if (wishListInStorage) {
      wishList = JSON.parse(wishListInStorage)
    }
    this.data = wishList
  }

  constructor(private router: Router) {
  }

  showItem(id: string | number) {
    this.router.navigate(['wish', id])
  }
}
