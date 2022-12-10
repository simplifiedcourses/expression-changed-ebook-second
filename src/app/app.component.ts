import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  standalone: true,
  styleUrls: ['./app.component.css'],
  imports: [CommonModule],
  template: `
  {{random()}}
  `,
})
export class AppComponent {
 
  public random(): number {
      return Math.random()
  }
}
