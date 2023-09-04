import { Component } from '@angular/core';
import {Subscription} from "rxjs";
import {LayoutService} from "../../services/layout.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  private eventSubscription: Subscription;

  constructor(private layoutService: LayoutService) {
    this.eventSubscription = this.layoutService.simpleEmitter.subscribe(
      (message) => {
        console.log(message)
      }
    );
  }

  ngOnDestroy() {
    this.eventSubscription.unsubscribe();
  }
}
