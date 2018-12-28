import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatData'
})
export class FormatDataPipe implements PipeTransform {

    transform(value: any, locale = 'pt-BR'): any {
        console.log(value);
        var data = new Date(value);
        var dia = data.getDate();
        // var mes = data.getMonth() + 1;
        let month = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
        let mes = month[data.getMonth()];
        var ano = data.getFullYear();

        var result = dia+" de "+mes+" de "+ano;
        return result;
    }


}
