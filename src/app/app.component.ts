import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './Component/login/login.component';
import { LayoutComponent } from './Component/layout/layout.component';

@Component({
  selector: 'app-root',
  standalone: true,
  // imports: [RouterOutlet,LoginComponent,LayoutComponent],
  imports: [RouterOutlet,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'SuperAdmin';
}
