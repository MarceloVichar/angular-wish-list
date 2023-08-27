import { Component } from '@angular/core';
import {WishService} from "../../services/wish.service";
import {Router} from "@angular/router";
import {Wish} from "../../interfaces/wish";

@Component({
  selector: 'app-purchased',
  templateUrl: './purchased.component.html',
  styleUrls: ['./purchased.component.css']
})
export class PurchasedComponent {
  data: Wish[] = []
  search: string = '';

  constructor(private wishService: WishService, private router: Router) {
  }

  async ngOnInit() {
    await this.fetchItems()
  }

  async onSearchChange() {
    await this.fetchItems();
  }

  async fetchItems() {
    const params: any = {status: 'ready'};
    if (this.search) {
      params['name'] = this.search;
    }
    (await this.wishService.getWishes(params))
      .subscribe((wishes: Wish[]) => {
        this.data = wishes
      })
  }

  showItem(id: string | number) {
    this.router.navigate(['wish', id])
  }

  async deleteItem(id: string | number) {
    (await this.wishService.deleteWish(id))
      .subscribe(() => {
        this.fetchItems()
      })
  }
}
