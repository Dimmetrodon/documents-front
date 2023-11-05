import { Component, Input, OnInit } from '@angular/core';
import { IDocument } from '../../models/document';
import { DocumentService } from '../../services/document.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
    selector: 'documents-page',
    templateUrl: './documents.component.html'
})

export class DocumentsComponent implements OnInit{
  @Input() document: IDocument;
    title = 'Documents';
    document_number = "";
    documents$ = this.documentService.getDocuments();
    new_document_input = false;
    newDocument : IDocument;
  
    constructor(private documentService: DocumentService, private router: Router) { }
  
    ngOnInit(): void {
      this.newDocument = {
        id: 0,
        document_number: '',
        date: new Date(),
        sum: 0,
        note: ""
      };
    }
  
    createDocument(){
      this.documentService.createDocument(this.newDocument).subscribe();
      this.router.navigate(['']);
    }
}