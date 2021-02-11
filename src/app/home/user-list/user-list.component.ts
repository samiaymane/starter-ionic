import { ChangeDetectionStrategy, Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/home/user-list/user.interface';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserListComponent implements OnInit {

  @Input()
  userList: any;

  @Output()
  selectedUser = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

}
