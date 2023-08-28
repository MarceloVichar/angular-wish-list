import {Component} from '@angular/core';
import {Wish} from "../../interfaces/wish";
import {Location} from '@angular/common';
import {ActivatedRoute} from "@angular/router";
import {WishService} from "../../services/wish.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  id: string | number | null
  location: any
  data!: Wish;
  isDataLoaded: boolean = false;

  constructor(private route: ActivatedRoute, private router: Router, private wishService: WishService, location: Location) {
    this.id = this.route.snapshot.paramMap.get('id')
    this.location = location
    this.router = router
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

  async onSubmit(form: Wish) {
    if (!form.id) {
      return
    }
    (await this.wishService.editWish(form.id, {...form, status: 'pending'})).subscribe({
      next: () => this.router.navigate(['']),
      error: (e) => console.error('Erro ao editar desejo:', e)
    });
  }

  back(): void {
    this.location.back()
  }
}
