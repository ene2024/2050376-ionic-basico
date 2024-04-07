import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.scss'],
})
export class ListaAlumnosComponent implements OnInit {

  constructor(private actionSheetController: ActionSheetController) { }

  ngOnInit() {}

  alumnos: any = ["Carlos", "Ximena", "Alberto", "Eduardo", "Baraba", "Georgina", "Kevin"];

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
    // Implementa aquí la lógica para eliminar al alumno
  }
}
