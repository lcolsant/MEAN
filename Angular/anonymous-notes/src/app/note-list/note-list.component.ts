import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Note } from '../note';


@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent {

  @Input() myNewNotes;
  @Output() deleteNoteEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onDelete(note:Note){
    this.deleteNoteEvent.emit(note);
  };
}
