import {Component} from '@angular/core';
import {Wish} from "../../interfaces/wish";
import {Router} from "@angular/router";
import {WishService} from "../../services/wish.service";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {

  constructor(private router: Router, private wishService: WishService) {}

  async onSubmit(form: Wish) {
    if (!form.name) { return }
    try {
      (await this.wishService.createWish({...form, status: 'pending'})).subscribe();
      this.router.navigate([''])
    } catch (e) {
      console.error('Erro ao criar desejo:', e);
    }
  }
}
