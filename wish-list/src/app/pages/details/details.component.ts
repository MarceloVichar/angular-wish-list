import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { Location } from '@angular/common';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  id: string | null
  location: any
  constructor(private route: ActivatedRoute, location: Location) {
    this.id = this.route.snapshot.paramMap.get('id')
    this.location = location
  }

  back(): void {
    this.location.back()
  }
}
