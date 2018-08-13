import { Component, OnInit} from '@angular/core';
import {User} from '../../../user';
import {UserService} from "../../services/user.service";
import {Observable} from "rxjs";
import {log} from "util";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users$: Observable<User[]>;
  selectedUser: User;
  deletedUsers = [];
  notDeletedUsers: User[];
  private insert: boolean;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.users$ = this.userService.getUsers();
    this.notDeletedUsers = [];
    this.users$.subscribe( users => {
      for (const user of users) {
        // @ts-ignore
        this.notDeletedUsers.push({user});
      }
    });
  }

  getUsers(): void {
    if (this.deletedUsers.length != 0){
      this.notDeletedUsers = [];
      this.users$.subscribe( users => {
        for (const user of users){
          this.insert = true;
          for (const deletedUser of this.deletedUsers) {
            // @ts-ignore
              if (user.id == deletedUser)
                this.insert = false;
            }
          if (this.insert) {
            // @ts-ignore
              this.notDeletedUsers.push({user});
            }
      }
    })}
  }
  onSelect(user: User): void {
    this.selectedUser = user;
  }
  delete(userid: number): void{
    log(this.notDeletedUsers, 14);
    this.deletedUsers.push(userid);
    this.getUsers();
    // @ts-ignore
    if (this.selectedUser.id == userid)
      this.selectedUser = null
}

}
