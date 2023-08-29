import { Component, Input, Output, EventEmitter, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { IPagination } from 'src/app/core/interfaces/pagination.model';
import { IAction } from 'src/app/core/interfaces/action.model';
import { IUser } from 'src/app/core/interfaces/user.model';

const material = [
  MatTableModule,
  MatCardModule,
  MatIconModule,
  MatButtonModule
]

@Component({
  selector: 'app-data-grid',
  standalone: true,
  imports: [CommonModule, ...material],
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.scss']
})
export class DataGridComponent implements OnInit {
  @Input() displayedColumns : any[] = [];
  @Input() dataSource : any[] = [];
  @Input() useColumns : string[]=  []
  @Output() action  = new EventEmitter();
  @Input() totalCount !: number;
  @Output () rowClicked = new EventEmitter();


  ngOnInit(): void {
  }

  emitAction(actionType : 'edit' | 'delete', element : any) {
        this.action.emit(
          {
            action : actionType,
            entity :  element
          } as IAction<IUser>
        )
  }

}
