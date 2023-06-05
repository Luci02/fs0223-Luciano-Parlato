import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Photo } from '../Models/photo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  apiUrl: string = 'https://jsonplaceholder.typicode.com/photos';

  constructor(
    private http: HttpClient
  ) { }

  getAllPhotos(): Observable<Photo[]>{
    return this.http.get<Photo[]>(this.apiUrl);
  }

  deletePhoto( photo: Photo ): Observable<Photo>{
    return this.http.delete<Photo>( this.apiUrl + '/' + photo.id );
  }

}
