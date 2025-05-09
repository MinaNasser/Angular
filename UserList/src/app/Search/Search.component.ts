import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl:'./search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchTerm: string = '';

  @Output() sendToParent = new EventEmitter<string>();

  search() {
    this.sendToParent.emit(this.searchTerm);
  }
  reset() {
    this.searchTerm = '';
    this.sendToParent.emit('');
  }

}
