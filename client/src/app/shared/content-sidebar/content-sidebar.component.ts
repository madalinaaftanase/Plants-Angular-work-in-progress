import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './content-sidebar.component.html',
  styleUrl: './content-sidebar.component.scss'
})
export class NavBarComponent {
}
