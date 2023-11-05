import { HttpClient } from '@angular/common/http';
import {Component, Input, OnInit} from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router';
import { IDocument } from 'src/app/models/document'
import { IPosition } from 'src/app/models/position';
import { DocumentService } from 'src/app/services/document.service';
import { PositionService } from 'src/app/services/position.service';

@Component({
    selector: 'app-document-details',
    templateUrl: './document-details.component.html'
})
export class DocumentDetailsComponent implements OnInit{
    title = "Document";
    @Input() position: IPosition;
    positions : IPosition[];
    document : IDocument;
    document_id: number;
    change_document = false;
    change_position = false;
    add_position = false;
    newDocument : IDocument;
    newPosition : IPosition;

    constructor(private documentService: DocumentService, private positionService: PositionService, private router: Router, private route: ActivatedRoute, private http: HttpClient) { }
  
    ngOnInit(): void {
        this.newDocument = {
            id: 0,
            document_number: '',
            date: new Date(),
            sum: 0,
            note: ""
        };
        this.newPosition = {
            id: 0,
            name: "",
            position_number: '',
            sum: 0,
        };
        this.route.params.subscribe(params => {
            this.document_id = params['id'];
        });
    
        this.documentService.getDocument(this.document_id).subscribe(
            (document: IDocument) => {
                this.document = document;
            });
    
        this.documentService.getPositions(this.document_id).subscribe(
            (positions: IPosition[]) => {
                this.positions = positions;
                console.log(this.positions);
            });
    }

    deleteDocument(): void{
        this.documentService.deleteDocument(this.document_id).subscribe();
        this.router.navigate(['']);
    }

    updateDocument(): void{
        this.documentService.updateDocument(this.document_id, this.newDocument).subscribe();
    }

    addPosition(): void{
        this.positionService.createPosition(this.document_id, this.newPosition).subscribe();
    }

}