import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import {alumno} from "../alumno.modelo"

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.scss'],
})
export class ListaAlumnosComponent implements OnInit {

  constructor(private actionSheetController: ActionSheetController) { }

  ngOnInit() {}
alumnos: alumno[] = [];
  alumno: alumno = {
    nombre: '',
    presente: false
  }

  async mostrarActionSheet(alumno: string) {
    const actionSheet = await this.actionSheetController.create({
      header: 'Confirmar eliminación',
      buttons: [
        {
          text: 'Eliminar',
          role: 'destructive',
          icon: 'trash',
          handler: () => {
            this.eliminarAlumno(alumno);
          }
        },
        {
          text: 'Cancelar',
          icon: 'close',
          role: 'cancel',
          handler: () => {
            console.log('Cancelado');
          }
        }
      ]
    });
    await actionSheet.present();
  }

  eliminarAlumno(alumno: string) { 
  }


  result : string = '';

  agregaAlumno()  {
    console.log("Hola")
    this.alumnos.push(this.alumno);
    this.alumno = {
      nombre: "",
      presente: false
    }

  }
  

}
