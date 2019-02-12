import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from 'src/app/core/models/user/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getAllUsersByFacility(id: number){
    return this.http.get<any>(`${environment.apiUrl}/User/GetUsersByFacilityAsync/${id}`);
  }

  delete(Id: string, UserName: string) {
    return this.http.delete<User>(`${environment.apiUrl}/User/DeleteUserSessionAsync/${Id}?username=${UserName}`);
  }

  register(user: User) {
    debugger;
    return this.http.post(`${environment.apiUrl}/Firm/SaveCompanyAsync`, user);
}

}
