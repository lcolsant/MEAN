import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoteListComponent } from './note-list/note-list.component';
import { NoteCreateComponent } from './note-create/note-create.component';

@NgModule({
  declarations: [
    AppComponent,
    NoteListComponent,
    NoteCreateComponent
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule,
    FormsModule,
    HttpModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
