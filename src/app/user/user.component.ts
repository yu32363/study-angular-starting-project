import {
  Component,
  computed,
  EventEmitter,
  Input,
  input,
  output,
  Output,
} from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'app-user',
  standalone: false,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) user!: User;
  @Input({ required: true }) selected!: boolean;
  @Output() select = new EventEmitter<string>();

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  //signal input approch
  // id = input.required<string>();
  // avatar = input.required<string>();
  // name = input.required<string>();
  // select = output<string>();

  // imagePath = computed(() => {
  //   return 'assets/users/' + this.avatar;
  // });

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
