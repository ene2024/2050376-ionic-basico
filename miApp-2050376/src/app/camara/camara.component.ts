import { Component, OnInit } from '@angular/core';
import { FotoServiceService } from '../foto-service.service';
import { Foto } from 'foto.model';

@Component({
  selector: 'app-camara',
  templateUrl: './camara.component.html',
  styleUrls: ['./camara.component.scss'],
})
export class CamaraComponent implements OnInit {
  fotos: Foto[] = []; 

  constructor(public fotoService: FotoServiceService) { }

  ngOnInit() {

    this.fotos = this.fotoService.fotos;
  }

  tomarFoto() {
    this.fotoService.addNewToGallery();
  }
}
