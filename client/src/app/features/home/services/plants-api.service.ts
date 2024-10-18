import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { PlantsApiResponse } from '../models/plants-api-response';

@Injectable({
  providedIn: 'root',
})
export class PlantsApiService {
  private readonly httpClient = inject(HttpClient);

  private baseUrl = '/api/plants';

  getPlants(): Observable<PlantsApiResponse[]> {
    return this.httpClient.get<PlantsApiResponse[]>(this.baseUrl);
  }

  changePlantImageUrl(plantId: string, imageUrl: string) {

    return this.httpClient
      .patch<PlantsApiResponse>(`${this.baseUrl}/${plantId}`, {
        imageUrl: imageUrl,
      })
      .pipe(
        catchError((error) => {
          console.error(error);
          return of();
        })
      );
  }
}
