import { Component, OnInit } from '@angular/core';
import { ProveedoresService } from 'src/app/servicios/proveedores.service';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms'


@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css']
})
export class ProveedoresComponent implements OnInit{
  
  proveedores: any[] = [];
  cargando = false;
  campoBusqueda: FormControl;
  busqueda: string;
  resultados = false;
  noresultados = false;

  constructor( private proveedoresService: ProveedoresService) { 
    this.proveedoresService.getProveedores()
      .subscribe(proveedores => {
        for ( const id$ in proveedores) {
          const p = proveedores[id$];
          p.id$ = id$;
          this.proveedores.push(proveedores[id$]);
        }
        this.cargando= false;
      })
  }


  eliminarProveedor(id$) {
    // this.proveedoresService.delProveedores(id$)        Esto es sin que actualice la tabla luego de eliminar algún proveedor
    //   .subscribe( res => {
    //   console.log(res);
    //   })

    this.proveedoresService.delProveedores(id$).subscribe( res => {
      this.proveedores = [];
      this.proveedoresService.getProveedores()
      .subscribe(proveedores => {
        for ( const id$ in proveedores) {
          const p = proveedores[id$];
          p.id$ = id$;
          this.proveedores.push(proveedores[id$]);
          }
      })
    });
  }

  ngOnInit() {
    this.campoBusqueda = new FormControl();
    this.campoBusqueda.valueChanges
      .subscribe(term => {
        this.busqueda = term;
        this.cargando = true;
        if (this.busqueda.length !== 0) {
          this.proveedoresService.getProveedoresSearch(this.busqueda)
            .subscribe(proveedores => {
              this.proveedores = [];
              for ( const id$ in proveedores) {
                const p = proveedores[id$];
                p.id$ = id$;
                this.proveedores.push(proveedores[id$]);
              }
              if (this.proveedores.length < 1 && this.busqueda.length >= 1) {
                this.noresultados = true;
              } else {
                  this.noresultados = false;
                }
            })
            this.cargando = false;
            this.resultados = true;
        } else {
            this.proveedores = [];
            this.cargando = false;
            this.resultados = false;
          }
      });
  }

}