import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Wish} from "../../interfaces/wish";

@Component({
  selector: 'app-purchased-table',
  templateUrl: './purchased-table.component.html',
  styleUrls: ['./purchased-table.component.css']
})
export class PurchasedTableComponent {
  @Input() items: Wish[] = []
  @Output() show = new EventEmitter<string | number>()
  @Output() delete = new EventEmitter<string | number>()
}
