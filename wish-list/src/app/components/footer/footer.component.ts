import {Component} from '@angular/core';
import {LayoutService} from "../../services/layout.service";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  constructor(private layoutService: LayoutService) {
  }

  onClickButton() {
    this.layoutService.simpleEmitter.emit('Evento disparado para testar o log')
  }
}
