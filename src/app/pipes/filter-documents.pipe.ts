import { Pipe, PipeTransform } from '@angular/core';
import { IDocument } from '../models/document';

@Pipe({
  name: 'filterDocuments'
})
export class FilterDocumentsPipe implements PipeTransform {

  transform(documents: IDocument[],search: string): IDocument[] {
    return documents.filter(d => d.document_number.toLowerCase().includes(search.toLowerCase()));
  }

}
