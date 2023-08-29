import { HttpErrorResponse } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IEditUser } from 'src/app/core/interfaces/edit.model';
import { IResponse } from 'src/app/core/interfaces/response.model';
import { IUser } from 'src/app/core/interfaces/user.model';
import { UserService } from 'src/app/core/services/user/user.service';

@Component({
  selector: 'app-add-edit-dialog',
  templateUrl: './add-edit-dialog.component.html',
  styleUrls: ['./add-edit-dialog.component.scss']
})
export class AddEditDialogComponent {
  userId : string = '';
  crudForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    number: new FormControl('', [Validators.required]),
  })
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { row: IEditUser | null, operation: 'EDIT' | 'ADD' },
    private userService: UserService,
    private _snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<AddEditDialogComponent>
  ) {
    if (data.operation === 'EDIT' && data?.row) {
      this.userId  = data.row.userId || '';
      delete data.row.userId;
      this.crudForm.patchValue(data.row);
    } else if (data.operation === 'ADD') {
      this.crudForm.markAsTouched();
    }
  }

  addUser() {
    const userDetails = this.crudForm.value;
    this.userService.addUser(userDetails as IUser).subscribe({
      next: (response: IResponse<null>) => {
        this.userService.loadUsers.emit();
        this._snackBar.open(response.message || '', 'Ok');
        this.dialogRef.close();
      },
      error: (error: HttpErrorResponse) => {
        this._snackBar.open(error.error, 'Ok')
        this.dialogRef.close();
      }
    })
  }

  updateUser() {
    // const userDetails = this.crudForm.value;
    const userDetails = {
      ...this.crudForm.value,
      userId: this.userId
    }
    this.userService.editUser(userDetails as IEditUser).subscribe({
      next: (response: IResponse<null>) => {
        this.userService.loadUsers.emit();
        this._snackBar.open(response.message || '', 'Ok');
        this.dialogRef.close();
      },
      error: (error: HttpErrorResponse) => {
        this._snackBar.open(error.error, 'Ok')
        this.dialogRef.close();
      }
    })
  }

  handleClick() {
    if (this.data.operation === 'ADD')
      this.addUser();
    else
      this.updateUser();
  }
}
