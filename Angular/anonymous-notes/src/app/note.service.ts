import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

import { Note } from './note';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  private base = '/api/notes';
  notes:Array<Note> = [];

  notesObservable: BehaviorSubject<Note[]> = new BehaviorSubject([]);

  constructor(private http: HttpClient) {
    this.getNotes();
   }

  getNotes(){
    this.http.get(this.base).subscribe(
      (note:Note[]) => { this.notesObservable.next(note)}
    );
  }

  addNotes(note:Note){
    this.http.post(this.base, note).subscribe(
      (response) => { this.getNotes();}
    );
  }

  // addNotes(note: Note){
  //   this.notes.push(note);
  //   this.notesObservable.next(this.notes);
  //   console.log(`in service...added ${note}`);
  // }

  deleteNote(index:number){
    this.notes.splice(index,1);
    this.notesObservable.next(this.notes);
  }

}
