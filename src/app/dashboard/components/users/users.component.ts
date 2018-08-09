import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {User} from '../../../user';
import {UserService} from "../../services/user.service";
import {Observable} from "rxjs";
import { log } from "util";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
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
    this.getUsers();
  }

  getUsers(): void {
    this.notDeletedUsers = [];
    if (this.deletedUsers.length != 0){
      log(this.notDeletedUsers, 2);
      this.users$.subscribe( users => {
        this.insert = true;
        for (const user of users){
          for (const deletedUser of this.deletedUsers) {
            // @ts-ignore
              if (user.id == deletedUser)
                            this.insert = false;
            }
          if (this.insert)
            this.notDeletedUsers.push(user);
      }
    })}
    else {
        this.users$.subscribe( users => {
          for (const user of users) {
            this.notDeletedUsers.push(user);
          }
          log(this.notDeletedUsers)
        })
      }
  }
  onSelect(user: User): void {
    this.selectedUser = user;
  }
  delete(userid): void{
    this.deletedUsers.push(userid);
    this.getUsers()
}

}
