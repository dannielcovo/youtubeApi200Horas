import { Pipe, PipeTransform } from '@angular/core';
import {style} from '@angular/animations';

@Pipe({
  name: 'number'
})
export class NumberPipe implements PipeTransform {

    transform(value: any, locale = 'pt-BR'): any {
        return new Intl.NumberFormat(locale, {style: 'decimal', currency: 'BRL'}).format(value);
    }

}
