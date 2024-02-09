import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'jsonFormat',
  standalone: true,
})
export class JsonFormatPipe implements PipeTransform {
  transform(jsonString: string): string {
    if (!jsonString) {
      return jsonString;
    }
    const formattedValue = jsonString.replace(/,/g, ',\n');
    return formattedValue;
  }
}
