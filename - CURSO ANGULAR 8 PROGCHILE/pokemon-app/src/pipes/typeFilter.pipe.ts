import { Pipe, PipeTransform } from '@angular/core';
import { filter } from 'rxjs/operators';
import { TypeFilterPipe } from 'src/pipes/typeFilter.pipe';

@Pipe({
    name: 'TypeFilterPipe'
})

export class TypeFilterPipe implements PipeTransform {


}
