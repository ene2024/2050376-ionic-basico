import { Component, OnInit } from '@angular/core';
import { FotoServiceService } from '../foto-service.service';

@Component({
  selector: 'app-camara',
  templateUrl: './camara.component.html',
  styleUrls: ['./camara.component.scss'],
})
export class CamaraComponent  implements OnInit {

  constructor(public fotoService: FotoServiceService) { }

  ngOnInit() {}

  tomarFoto(){

    this.fotoService.addNewToGallery()

  }

}


