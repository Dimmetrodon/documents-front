import {Component, Input} from '@angular/core'
import { IDocument } from 'src/app/models/document'

@Component({
    selector: 'app-document',
    templateUrl: './document.component.html'
})
export class DocumentComponent {
    @Input() document : IDocument

    details = false
}