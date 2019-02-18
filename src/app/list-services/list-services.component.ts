import { Component, OnInit, Input } from '@angular/core';
import ServiceBackend from '../commons/models/services.backend';

@Component({
  selector: 'app-list-services',
  templateUrl: './list-services.component.html',
  styleUrls: ['./list-services.component.css']
})
export class ListServicesComponent implements OnInit {

  @Input()
  listServices: ServiceBackend[];

  constructor() { }

  ngOnInit() {
  }

}
