import { Component, Input, OnInit } from '@angular/core';
import { Personne } from '../personne';
import { PersonneComponent } from '../personne/personne.component';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

@Input() pers:Personne;

  constructor() { }

  ngOnInit(): void {
  }

}
