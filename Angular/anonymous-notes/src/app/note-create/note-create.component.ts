import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Note } from '../note';
import { NoteService } from '../note.service';

@Component({
  selector: 'app-note-create',
  templateUrl: './note-create.component.html',
  styleUrls: ['./note-create.component.css']
})
export class NoteCreateComponent implements OnInit {

  newNote:Note = new Note();
  notes:Array<Note> = [];

  constructor(
    private noteService:NoteService,
  ) { }

  ngOnInit() {
    this.newNote = new Note();
    this.noteService.getNotes();

  }

  onSubmit(event:Event, formData:NgForm){

    event.preventDefault();

    console.log('note submitted');

    this.noteService.addNote(this.newNote).subscribe(note=>{
      this.notes.push(note);
    });

    console.log(this.notes);
    this.newNote = new Note();

    //refresh form
    formData.reset();

  }

}
