import { Component, Input, OnInit } from '@angular/core';
import { UserService } from 'src/users.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {
  @Input() users: string[];

  constructor(private UserService: UserService) {}

  ngOnInit() {
    this.users = this.UserService.inactiveUsers;
  }

  onSetToActive(id: number) {
    this.UserService.setToActive(id);
  }
}
