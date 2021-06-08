import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-insumoform',
  templateUrl: './insumoform.component.html',
  styleUrls: ['./insumoform.component.css'],
  providers: [DataService]
})
export class InsumoformComponent implements OnInit {
  	constructor(private dataSvc: DataService) { }

  ngOnInit(): void {
  }



}
