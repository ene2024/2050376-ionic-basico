import { Component, OnInit } from '@angular/core';
import { ConsultaService } from '../consulta.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss'],
})
export class ProductosComponent  implements OnInit {

  productos: any[] = [];

  constructor(private consulta: ConsultaService, private router: Router) { }

  ngOnInit(): void {
    this.obtenerProductos();
  }

  obtenerProductos(): void{    this.consulta.getProductos()    .subscribe((resp: Object) => {      console.log(resp);      this.productos = resp as any[];  });

  }
  verDetalleProducto(id: number) {
    console.log('Clic en tarjeta de producto. ID:', id);
    const productoSeleccionado = this.productos.find(producto => producto.id === id);
  console.log('Detalles del producto:', productoSeleccionado);
    this.router.navigate(['/producto', id]);
  }
  
}
