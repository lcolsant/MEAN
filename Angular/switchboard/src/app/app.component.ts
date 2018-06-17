import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

//flipSwitch accepts the index value that was sent from the click event.
//The value at that index is retrieved, negated and reassigned.
export class AppComponent {
  switches = [true, true, true, true, true, true, true, true, true, true];
  flipSwitch(idx) {
    this.switches[idx] = !this.switches[idx];
    console.log(`${idx} was clicked`);
  }
}
