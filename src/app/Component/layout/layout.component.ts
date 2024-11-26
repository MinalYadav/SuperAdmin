import { Component } from '@angular/core';
import { RouterOutlet ,RouterLink } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  // imports: [RouterOutlet,RouterLink],
  imports: [RouterOutlet,SidebarComponent,NavbarComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

}
