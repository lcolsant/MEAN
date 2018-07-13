
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
  //false sets pipe to run over and over
  pure: false
})
export class SearchPipe implements PipeTransform {

  transform<T extends object>(elements: T[], filter: T): Array<T> {

    // console.log('searching', elements, filter);
    // if undefined or null just return all elements
    if (!elements || !filter) {
      return elements;
    }

    return elements.filter(element => this.applyFilter(element, filter));
  }

  private applyFilter<T>(element: T, filter: T): boolean {

    // console.log('bicycle', element);
    // console.log('filter', filter);

    for (const field in filter) {

      if (this.validInput(filter[field]) && this.validInput(element[field])) {

        if (
          !element[field]
          .toString()
          .toLowerCase()
          .includes(filter[field].toString().toLowerCase())
        ) {
          return false;
        }
      }
    }
    return true;
  }

  //helper method to validate passed data
  private validInput<T>(input: T): boolean {
    return input !== undefined && input !== null;
  }
}
