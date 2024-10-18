import {
  Component,
  inject,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { PlantsApiResponse } from '../../features/home/models/plants-api-response';
import { CapitalizePipe } from '../pipes/capitalize.pipe';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PlantsApiService } from '../../features/home/services/plants-api.service';
import { take, tap } from 'rxjs';
type PlantCardInputs = 'plantDetails';

@Component({
  selector: 'app-plant-card',
  standalone: true,
  imports: [CapitalizePipe, CommonModule, FormsModule],
  templateUrl: './plant-card.component.html',
  styleUrl: './plant-card.component.scss',
})
export class PlantCardComponent implements OnChanges {
  private readonly plantApiService = inject(PlantsApiService);

  @Input() plantDetails!: PlantsApiResponse;
  editImageUrl = false;
  imageUrl = '';

  ngOnChanges(changes: Partial<Record<PlantCardInputs, SimpleChanges>>): void {
    //
  }

  handleImageUrl(plantId: string, imageUrl: string) {
    this.editImageUrl = !this.editImageUrl;
    this.plantApiService
      .changePlantImageUrl(plantId, imageUrl)
      .pipe(
        take(1),
        tap((res) => {
          this.plantDetails = res;
        })
      )
      .subscribe();
  }

  handleEdit() {
    this.editImageUrl = !this.editImageUrl;
  }
}
