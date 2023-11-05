import { Component, OnInit } from '@angular/core';
import { IDocument } from './models/document';
import { DocumentService } from './services/document.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  title = 'Documents';
  document_number = "";
  documents$ = this.documentService.getDocuments();
  new_document_input = false;
  newDocument : IDocument;

  constructor(private documentService: DocumentService) { }

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
    console.log('createDocument')
    this.documentService.createDocument(this.newDocument).subscribe(
      response => {
        console.log(response);
        this.new_document_input = false;
      },
      error =>{
        console.log(error);
      }
    );
  }
}
