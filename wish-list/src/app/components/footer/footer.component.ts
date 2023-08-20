import {Component} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  footerText: string = "Wish List - Agendador de desejos"

  alertFooterText(): void {
    window.alert(this.footerText)
  }
}
