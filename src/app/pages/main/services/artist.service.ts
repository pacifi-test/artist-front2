import { Injectable } from '@angular/core';
import { FormData } from '../../../interfaces/form.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'any'
})
export class ArtistService {

  constructor(private httpClient: HttpClient) {
  }

  listAll() {
    return this.httpClient.get<FormData[]>("http://localhost:8000/api-artist/artists");
  }

  save(artist: { last_name: string | null | undefined; description: string | null | undefined; first_name: string | null | undefined; email: string | null | undefined; age: number | null | undefined }) {
    return this.httpClient.post<FormData>("http://localhost:8000/api-artist/artists", artist);
  }
}
