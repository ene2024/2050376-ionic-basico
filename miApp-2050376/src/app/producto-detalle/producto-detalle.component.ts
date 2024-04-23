import { Component, OnInit } from '@angular/core';
import { ConsultaService } from '../consulta.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-producto-detalle',
  templateUrl: './producto-detalle.component.html',
  styleUrls: ['./producto-detalle.component.scss'],
})
export class ProductoDetalleComponent implements OnInit {

  idProducto: string = '';
  producto: any = {};

  constructor(private consulta: ConsultaService, private ruta: ActivatedRoute) { }

  ngOnInit() {
    this.idProducto = this.ruta.snapshot.params['id'];
    this.realizarConsultaDetalle(this.idProducto);
  }

  realizarConsultaDetalle(idProducto: string): void {
    const idNumerico = parseInt(idProducto, 10);
    this.consulta.getProductoDetalle(idNumerico)
      .subscribe((resp: Object) => {
        console.log(resp);
        this.producto = resp;
      });
  }
}
