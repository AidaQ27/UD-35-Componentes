import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-altaclient',
  templateUrl: './altaclient.component.html',
  styleUrls: ['./altaclient.component.css']
})
export class AltaclientComponent implements OnInit {

  @Input() listaClients: any;

  constructor() { }

  ngOnInit(): void {
  }

}
