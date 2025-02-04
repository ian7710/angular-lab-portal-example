import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent {
  options: string[] = ['Option 1', 'Option 2', 'Option 3'];
}

