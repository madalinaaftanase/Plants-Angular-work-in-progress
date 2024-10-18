import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  CareLevel,
  Sunlight,
  Watering,
} from '../../shared/models/plant-details';
import { PlantsApiResponse } from '../home/models/plants-api-response';
import { PlantFormComponent } from './components/plant-form/plant-form.component';
import { MatSidenavModule } from '@angular/material/sidenav';

@Component({
  selector: 'app-user-plants',
  standalone: true,
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    CommonModule,
    PlantFormComponent,
    MatSidenavModule
  ],
  templateUrl: './user-plants.component.html',
  styleUrl: './user-plants.component.scss',
})
export class UserPlantsComponent implements OnInit {
  plantsLocalStorage: PlantsApiResponse[] = [];

  ngOnInit(): void {
    this.plantsLocalStorage = JSON.parse(
      localStorage.getItem('my-plants') || '[]'
    );
  }

  handleAddPlant(): void {
    console.log('Open side panel to add');
  }
}
