import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, filter } from 'rxjs';
import { Photo } from 'src/app/Models/photo';
import { PhotoService } from 'src/app/services/photo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  photosArray: Photo[] = [];
  likedPhoto: number[] = [];
  sub!: Subscription;

  constructor( private PhotoSvc: PhotoService ){}


  ngOnInit(): void {

    this.sub = this.PhotoSvc.getAllPhotos()
    // .pipe(filter((res: Photo[], i: number) => res[i].id<2))
    .subscribe({
      next: (currentPhoto: Photo[]) => {
        this.photosArray = currentPhoto.filter( (currentPhoto:Photo) => currentPhoto.id <= 10 );
      },
      error: (err: any) => console.log(err),
      complete: () => console.log('completato')
    });

  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  deletePhoto(photo: Photo){
    this.PhotoSvc.deletePhoto(photo);
    console.log('eliminata');
  }

  addLike(id: number){
    this.likedPhoto.push(id);
  }

}
