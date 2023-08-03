import { Component, OnInit } from '@angular/core';
import {PhotosService} from './../../services/photos.service';
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html'
})
export class GalleryComponent implements OnInit {

  photos: string[] = [];
  
  constructor(
  private phothosServices: PhotosService
  ){
    this.photos = this.phothosServices.photos;
  }
  ngOnInit(): void {
  }

  async takePhoto(){
    await this.phothosServices.addNewPhoto();
  }
}
