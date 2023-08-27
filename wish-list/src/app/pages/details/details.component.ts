import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { Location } from '@angular/common';
import {WishService} from "../../services/wish.service";
import {Wish} from "../../interfaces/wish";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  id: string | number | null
  location: any
  data!: Wish;
  isDataLoaded: boolean = false;

  constructor(private route: ActivatedRoute, location: Location, private wishService: WishService) {
    this.id = this.route.snapshot.paramMap.get('id')
    this.location = location
  }

  async ngOnInit() {
    await this.fetchItem()
  }

  async fetchItem() {
    (await this.wishService.getWish(this.id))
      .subscribe((wish: Wish) => {
        this.data = wish
        this.isDataLoaded = true;
      })
  }

  back(): void {
    this.location.back()
  }
}
