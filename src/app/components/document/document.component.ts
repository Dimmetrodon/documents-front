import {Component, Input} from '@angular/core'
import { Router } from '@angular/router'
import { IDocument } from 'src/app/models/document'

@Component({
    selector: 'app-document',
    templateUrl: './document.component.html'
})
export class DocumentComponent {
    @Input() document : IDocument

    details = false

    constructor(private router: Router){}

    showDetails(){
        this.router.navigate(['/document', this.document.id]);
    }
}