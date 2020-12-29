import { Component, OnInit} from '@angular/core';
import { UserService } from 'src/users.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {
  users: string[];

  constructor(private UserService: UserService) {}

  ngOnInit() {
    this.users = this.UserService.activeUsers;
  }

  onSetToInactive(id: number) {
    this.UserService.setToInactive(id);
  }
}
