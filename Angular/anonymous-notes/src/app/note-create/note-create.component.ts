import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Note } from '../note';
import { NoteService } from '../note.service';

@Component({
  selector: 'app-note-create',
  templateUrl: './note-create.component.html',
  styleUrls: ['./note-create.component.css']
})
export class NoteCreateComponent implements OnInit {

  @Output() emitEvent = new EventEmitter();

  newNote:Note = new Note();

  constructor(private noteService:NoteService) { }

  ngOnInit() {
    this.newNote = new Note();
  }

  onSubmit(event:Event, formData:NgForm){

    event.preventDefault();

    this.noteService.addNote(this.newNote).subscribe(note=>{
      this.emitEvent.emit();
    });

    this.newNote = new Note();

    formData.reset();

  }

}
