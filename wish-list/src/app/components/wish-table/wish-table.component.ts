import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Wish} from "../../interfaces/wish";

@Component({
  selector: 'app-wish-table',
  templateUrl: './wish-table.component.html',
  styleUrls: ['./wish-table.component.css']
})
export class WishTableComponent {
  @Input() items: Wish[] = []
  @Output() show = new EventEmitter<string | number>()
}
