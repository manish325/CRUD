import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';
import { IUser } from '../../interfaces/user.model';
import { Observable } from 'rxjs';
import { API_ENDPOINTS } from '../../constants/api-endpoints';
import { IAddUser } from '../../interfaces/add.model';
import { IResponse } from '../../interfaces/response.model';
import { IEditUser } from '../../interfaces/edit.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  loadUsers = new EventEmitter()
  constructor(private http : HttpClient) { }

  getUsers() : Observable<IResponse<IUser>> {
    return this.http.get(API_ENDPOINTS.getAllUsers) as Observable<IResponse<IUser>>
  }

  addUser(user : IAddUser) : Observable<IResponse<null>> {
    return this.http.post(API_ENDPOINTS.addUser, user) as Observable<IResponse<null>>
  }

  editUser(user : IEditUser) : Observable<IResponse<null>> {
    return this.http.put(API_ENDPOINTS.editUser, user) as Observable<IResponse<null>>;
  }

  deleteUser(userId : string) : Observable<IResponse<null>> {
    return this.http.delete(`${API_ENDPOINTS.deleteUser}/${userId}`) as Observable<IResponse<null>>;
  }
}
