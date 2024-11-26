import { Component, OnInit } from '@angular/core';
import { Card } from '../../Models/card.model';
import { CardService } from '../../services/Cards/card.service';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})

export class CardComponent implements OnInit{

  constructor(private cardsData:CardService){}
    
  cards: Card[] =[];

  ngOnInit(): void {
    this.cards = this.cardsData.getCards();
  }


}
