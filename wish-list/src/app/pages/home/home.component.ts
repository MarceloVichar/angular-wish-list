import {Component} from '@angular/core';
import {Wish} from "../../interfaces/wish";
import {Router} from '@angular/router';
import {WishService} from "../../services/wish.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  data: Wish[] = []

  constructor(private wishService: WishService, private router: Router) {
  }


  async ngOnInit() {
    await this.fetchItems()
  }

  async fetchItems() {
    (await this.wishService.getWishes({status: 'pending'}))
      .subscribe((wishes: Wish[]) => {
        this.data = wishes
      })
  }

  showItem(id: string | number) {
    this.router.navigate(['wish', id])
  }
}
