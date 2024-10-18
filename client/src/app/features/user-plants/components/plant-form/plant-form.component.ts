import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { PlantsApiResponse } from '../../../home/models/plants-api-response';
import {
  CareLevel,
  Sunlight,
  Watering,
} from '../../../../shared/models/plant-details';

@Component({
  selector: 'app-plant-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, FormsModule],
  templateUrl: './plant-form.component.html',
  styleUrl: './plant-form.component.scss',
})
export class PlantFormComponent {
  private readonly fb = inject(FormBuilder);

  plantsLocalStorage: PlantsApiResponse[] = [];
  wateringLevels: Watering[] = ['Low', 'Medium', 'High'];
  careLevel: CareLevel[] = ['Moderate', 'Medium', 'Hight'];
  sunlight: Sunlight[] = [
    'Full Sun',
    'Indirect Light',
    'Low Light',
    'Partial Sun',
  ];

  plantForm = this.fb.group({
    common_name: ['', Validators.required],
    indoor: ['', Validators.required],
    watering: ['', Validators.required],
    careLevel: ['', Validators.required],
    sunlight: ['', Validators.required],
    scientific_name: [''],
    origin: [''],
    dimension: [''],
    maintenance: [''],
    care_guides: [''],
    growth_rate: [''],
    flower_color: [''],
    fruit_nutritional_value: [''],
    harvest_season: [''],
    description: [''],
    salt_tolerant: [undefined],
    invasive: [undefined],
    tropical: [undefined],
    flowers: [undefined],
    fruits: [undefined],
    cuisine: [undefined],
    medicinal: [undefined],
    poisonous_to_pets: [undefined],
    imageUrl: [''],
  });

  onSubmit() {
    let storedPlants: any[] = [];

    try {
      const plantsFromStorage = localStorage.getItem('my-plants');

      if (plantsFromStorage) {
        storedPlants = JSON.parse(plantsFromStorage);
      }

      if (!Array.isArray(storedPlants)) {
        storedPlants = [];
      }
    } catch (error) {
      console.error('Error parsing plants from localStorage', error);
      storedPlants = [];
    }

    storedPlants.push(this.plantForm.value);
    localStorage.setItem('my-plants', JSON.stringify(storedPlants));
    this.plantForm.reset();
  }

  isInvalid(controlName: string): boolean | undefined {
    const control = this.plantForm.get(controlName);
    return control?.invalid && control?.touched;
  }
}
