import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './shared/content-sidebar/content-sidebar.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { SideBarComponent } from './shared/side-bar/side-bar.component';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavBarComponent, TranslateModule, SideBarComponent,MatButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'client';
  constructor(private readonly translate: TranslateService) {}
}
