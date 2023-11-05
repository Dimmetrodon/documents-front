import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, catchError, map } from "rxjs";
import { IDocument } from "../models/document";
import { IPosition } from "../models/position";

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
        return this.http.post('http://localhost:8080/document/create', newDocument);
    }

    getDocument(id: number) : Observable<IDocument>{
        return this.http.get<IDocument>(`http://localhost:8080/document/${id}`);
    }

    deleteDocument(id: number): Observable<any> {
        console.log(`http://localhost:8080/document/delete/${id}`);
        return this.http.delete(`http://localhost:8080/document/delete/${id}`);
    }

    updateDocument(id:number, newDocument: IDocument) : Observable<any>{
        return this.http.post(`http://localhost:8080/document/update/${id}`, newDocument);
    }

    getPositions(id:number): Observable<any>{
        return this.http.get(`http://localhost:8080/document/getpositions/${id}`)
    }
}