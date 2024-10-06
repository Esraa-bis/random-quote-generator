import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { QuoteComponent } from "./quote/quote.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, QuoteComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'random-quote-generator';
}
