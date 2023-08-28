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
    search: string = '';
    loading: boolean = true;

    constructor(private wishService: WishService, private router: Router) {
    }


    async ngOnInit() {
        await this.fetchItems()
    }

    async onSearchChange() {
        await this.fetchItems();
    }

    async fetchItems() {
        this.loading = true
        const params: any = {status: 'pending'};
        if (this.search) {
            params['name'] = this.search;
        }
        (await this.wishService.getWishes(params))
            .subscribe({
                next: (wishes: Wish[]) => this.data = wishes,
                error: (err) => console.error('Erro ao buscar', err),
                complete: () => this.loading = false
            })
    }

    showItem(id: string | number) {
        this.router.navigate(['wish', id])
    }

    async checkItem(id: string | number) {
        (await this.wishService.markAsReady(id))
            .subscribe({
                next: () => this.fetchItems(),
                error: (err) => console.error('Erro ao alterar', err)
            })
    }

    editItem(id: string | number) {
        this.router.navigate(['wish', id, 'edit'])
    }

    async deleteItem(id: string | number) {
        (await this.wishService.deleteWish(id))
            .subscribe({
                next: () => this.fetchItems(),
                error: (err) => console.error('Erro ao remover', err)
            })
    }
}
