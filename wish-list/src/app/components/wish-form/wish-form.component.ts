import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Wish} from "../../interfaces/wish";

@Component({
  selector: 'app-wish-form',
  templateUrl: './wish-form.component.html',
  styleUrls: ['./wish-form.component.css']
})
export class WishFormComponent {
  @Input() item: Wish = {
    name: '',
    description: '',
    price: '',
    month: ''
  }
  @Output() submit = new EventEmitter<Wish>()

  model: Wish = {
    name: '',
    description: '',
    price: '',
    month: ''
  }

  months = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro'
  ]

  ngOnInit() {
      Object.assign(this.model, this.item)
  }

  onSubmit() {
    this.submit.emit(this.model)
  }
}
