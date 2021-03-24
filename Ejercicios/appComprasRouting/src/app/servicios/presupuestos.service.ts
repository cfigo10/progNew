import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';
import { pipe } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class PresupuestosService {

  presURL = 'https://appcomprasrouting.firebaseio.com/presupuestos.json';
  presURL2 = 'https://appcomprasrouting.firebaseio.com/presupuestos';

constructor(private http: HttpClient) {

  }

  postPresupuesto( presupuesto: any) {
    const newpres = JSON.stringify(presupuesto);
    const headers = new HttpHeaders({'Content-Type': 'application/json'});

    return this.http.post( this.presURL, newpres, {headers})
      .pipe(map( res => {
        //console.log(res);
        //const resJSON = JSON.parse(res);
        //console.log(resJSON);
        return res;
    }))
  }

  getPresupuestos () {
    return this.http.get( this.presURL )
      .pipe(map( res => res));
    }
  
  getPresupuesto ( id$: string ) {
    const url = `${ this.presURL2 }/${ id$ }.json`;
    return this.http.get( url )
      .pipe(map( res => res));
  }

  putPresupuesto( presupuesto: any, id$: string) {
    const newpre = JSON.stringify(presupuesto);
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    const url = `${ this.presURL2 }/${ id$ }.json`;
    return this.http.put( url, newpre, {headers})
      .pipe(map( res => {
      //console.log(res.json());
      //return res.json();
      return res;
    }))
  }
  
  delPresupuesto ( id$: string ) {
    const url = `${ this.presURL2 }/${ id$ }.json`;
    return this.http.delete( url )
    .pipe(map( res => res));
  }
}
