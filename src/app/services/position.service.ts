import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, catchError } from "rxjs";
import { IPosition } from "../models/position";

@Injectable({
    providedIn: 'root'
})
export class PositionService{
    constructor(private http: HttpClient){
    }

    createPosition(document_id:number, newPosition: IPosition) : Observable<any>{
        return this.http.post(`http://localhost:8080/document/${document_id}/createposition`, newPosition);
    }

    updatePosition(position_id:number, newPosition: IPosition) : Observable<any>{
        return this.http.post(`http://localhost:8080/updateposition/${position_id}`, newPosition);
    }

    deletePosition(position_id:number) : Observable<any>{
        return this.http.delete(`http://localhost:8080/deleteposition/${position_id}`);
    }
}