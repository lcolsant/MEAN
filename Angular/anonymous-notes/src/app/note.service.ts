import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Note } from './note';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  private base = '/api/notes';

  constructor(private http: HttpClient) {
   }

  getNotes(): Observable<Note[]>{
    return this.http.get<Note[]>(this.base);
  }

  addNote(note:Note): Observable<Note>{
    return this.http.post<Note>(this.base, note);
  }

  deleteNote(note: Note): Observable<Note> {
    return this.http.delete<Note>(`${this.base}/${note._id}`);
  }


}
