import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';


@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent {

}
