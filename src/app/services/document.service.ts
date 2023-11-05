import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, catchError } from "rxjs";
import { IDocument } from "../models/document";

@Injectable({
    providedIn: 'root'
})
export class DocumentService{
    constructor(private http: HttpClient){
    }

    getDocuments() : Observable<IDocument[]>{
        return this.http.get<IDocument[]>('http://localhost:8080/');
    }

    createDocument(newDocument: IDocument) : Observable<any>{
        console.log('createDocument');
        return this.http.post('http://localhost:8080/document/create', newDocument);
    }
}