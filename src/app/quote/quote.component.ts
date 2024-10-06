import { Component } from '@angular/core';
import { DUMMY_QUOTES } from '../data/dummy-quotes';

@Component({
  selector: 'app-quote',
  standalone: true,
  imports: [], 
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css'] 
})
export class QuoteComponent {
  selectedQuote = this.getRandomQuote();

  getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * DUMMY_QUOTES.length);
    return DUMMY_QUOTES[randomIndex];
  }


  onClick() {
    this.selectedQuote = this.getRandomQuote();
  }
}
