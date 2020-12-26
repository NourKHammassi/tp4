import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-personne',
  templateUrl: './personne.component.html',
  styleUrls: ['./personne.component.css']
})
export class PersonneComponent implements OnInit {
  @Input() name:string;
  @Input() age:number;
  @Input() etud:boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
