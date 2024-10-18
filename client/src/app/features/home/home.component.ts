import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { PlantsApiService } from './services/plants-api.service';
import { PlantCardComponent } from '../../shared/plant-card/plant-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, PlantCardComponent, TranslateModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  private readonly plantsApiService = inject(PlantsApiService);
  private readonly translate = inject(TranslateService);

  public plants$ = this.plantsApiService.getPlants();
}
