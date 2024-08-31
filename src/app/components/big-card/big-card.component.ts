import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {

  @Input()
  photoCover:string = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBxcTrhT8MkFgGy_g0YuVMNy8PPBKfm2RByQ&s"
  cardTitle:string = "Novo homem de ferro anunciado"
  cardDescription:string = "Marvel studio anuncia novo filme do homem de ferro"

  constructor() { }

  ngOnInit(): void {
  }

}
