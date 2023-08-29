import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IAction } from 'src/app/core/interfaces/action.model';
import { IResponse } from 'src/app/core/interfaces/response.model';
import { IUser } from 'src/app/core/interfaces/user.model';
import { UserService } from 'src/app/core/services/user/user.service';
import { AddEditDialogComponent } from '../../components/add-edit-dialog/add-edit-dialog.component';
import { IEditUser } from 'src/app/core/interfaces/edit.model';
import { DeleteDialogComponent } from '../../components/delete-dialog/delete-dialog.component';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})
export class CrudComponent implements OnInit {
  users : IUser[] = [];
  displayedColumns : string[] = [];
  useColumns : string[] = [
    'Name',
    'Email',
    'Contact No.',
    ''
  ]
  constructor(
    private userService : UserService,
    private dialogService : MatDialog,
    private _snackbar : MatSnackBar
    ) {}

    ngOnInit(): void {
      this.getAllUsers();

      this.userService.loadUsers.subscribe({
        next : ()=>{
          this.getAllUsers();
        }
      })
    }

  getAllUsers() {
    this.userService.getUsers().subscribe({
      next : (response : IResponse<IUser>)=>{
        this.users = response.data || [];
        this.displayedColumns = Object.keys(this.users[0] || {}).filter(key => key !== 'userId');
        this.displayedColumns.push('action');
      },
      error : (error : HttpErrorResponse)=>{
        this._snackbar.open('Something went wrong, please try again!' , 'Ok', {
          duration : 1000
        })
      }
    })
  }

  addUser() {
    this.dialogService.open(AddEditDialogComponent, {
      data : {
        row : null,
        operation : 'ADD'
      }
    })
  }

  editUser(user : IEditUser) {
    this.dialogService.open(AddEditDialogComponent, {
      data : {
        row : user,
        operation : 'EDIT'
      }
    })
  }

  deleteUser(userId : string) {
    this.dialogService.open(DeleteDialogComponent).afterClosed().subscribe({
      next : (res ? : any)=>{
        if(res) {
          this.userService.deleteUser(userId).subscribe({
            next : (response : IResponse<null>)=>{
              this._snackbar.open(response.message || '', 'Ok');
              this.getAllUsers();
            }
          })
        }
      }
    })
  }

  actionHandler(action : IAction<IEditUser> ) {
    console.log(action)
    if(action.action === 'edit') {
      this.editUser(action.entity)
    } else {
      this.deleteUser(action.entity.userId || '');
    }
  }
}
