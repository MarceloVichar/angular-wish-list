import {Component} from '@angular/core';
import {Wish} from "../../interfaces/wish";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {

  constructor(private router: Router) {}

  onSubmit(form: Wish) {
    if (form.name) {
      let wishList = []
      const wishListInStorage = localStorage.getItem('wishList')
      if (wishListInStorage) {
        wishList = JSON.parse(wishListInStorage)
      }
      wishList.push(form)
      localStorage.setItem('wishList', JSON.stringify((wishList)))
    }
    this.router.navigate([''])
  }
}
