import {Component, Input, OnInit} from '@angular/core'
import { Router } from '@angular/router'
import { IDocument } from 'src/app/models/document'
import { IPosition } from 'src/app/models/position'
import { PositionService } from 'src/app/services/position.service';

@Component({
    selector: 'app-position',
    templateUrl: './position.component.html'
})
export class PositionComponent implements OnInit{
    @Input() position : IPosition;
    updatedPosition : IPosition;
    updatePositionIdentificator = false;

    constructor(private positionService: PositionService) { }

    ngOnInit(): void {
        this.updatedPosition = this.position;
    }
    updatePosition(){
        this.positionService.updatePosition(this.position.id, this.updatedPosition).subscribe();
    }
    deletePosition(){
        this.positionService.deletePosition(this.position.id).subscribe();
    }
}