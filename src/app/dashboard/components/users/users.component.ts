import { Component, OnInit} from '@angular/core';
import {User} from '../../../user';
import {UserService} from "../../services/user.service";
import {Observable} from "rxjs";
import { ConfirmationDialogueService } from "../../services/confirmation-dialogue.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users$: Observable<User[]>;
  deletedUsers = [];
  notDeletedUsers: User[];
  private insert: boolean;

  constructor(private userService: UserService, private confirmationDialogueService: ConfirmationDialogueService) { }

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
  confirmation(userid: number): void {
    this.confirmationDialogueService.confirm('Please confirm..', 'Do you really want to ... ?')
      .then(() => this.delete(userid))
      .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
  }
  delete(userid: number): void{
    this.deletedUsers.push(userid);
    this.getUsers();
}
}
