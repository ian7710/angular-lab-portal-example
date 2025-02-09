import { Component } from '@angular/core';
import { MatCard, MatCardContent } from '@angular/material/card';

@Component({
  selector: 'app-order-information-bar',
  standalone: true,
  imports: [
    MatCard,
    MatCardContent
  ],
  templateUrl: './order-information-bar.component.html',
  styleUrl: './order-information-bar.component.scss'
})
export class OrderInformationBarComponent {

}
