import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';
import { pipe } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProveedoresService {
    
  proveeURL = 'https://appcomprasrouting.firebaseio.com/proveedores.json';
  proveeURL2 = 'https://appcomprasrouting.firebaseio.com/proveedores';


  constructor(private http: HttpClient) { 

  }


getProveedores () {
  return this.http.get( this.proveeURL )
    .pipe(map( res => res));
  }

getProveedor ( id$: string ) {
  const url = `${ this.proveeURL2 }/${ id$ }.json`;
  return this.http.get( url )
    .pipe(map( res => res));
}

postProveedores( proveedores: any) {
  const newprovees = JSON.stringify(proveedores);
  const headers = new HttpHeaders({'Content-Type': 'application/json'});

  return this.http.post( this.proveeURL, newprovees, {headers})
    .pipe(map( res => {
      //console.log(res);
      //const resJSON = JSON.parse(res);
      //console.log(resJSON);
      return res;
  }))
}

putProveedores( proveedores: any, id$: string) {
  const newprovee = JSON.stringify(proveedores);
  const headers = new HttpHeaders({'Content-Type': 'application/json'});
  const url = `${ this.proveeURL2 }/${ id$ }.json`;
  return this.http.put( url, newprovee, {headers})
    .pipe(map( res => {
    //console.log(res.json());
    //return res.json();
    return res;
  }))
}

delProveedores ( id$: string ) {
  const url = `${ this.proveeURL2 }/${ id$ }.json`;
  return this.http.delete( url )
  .pipe(map( res => res));
}

getProveedoresSearch(busqueda: string) {
  const url = `${ this.proveeURL }?orderBy="nombre"&startAt="${ busqueda }"&endAt="${ busqueda }\uf8ff"`;
  return this.http.get( url )
  .pipe(map( res => res))
  }

}