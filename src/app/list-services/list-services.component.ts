import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import ServiceBackend from '../commons/models/services.backend';
import { ServicesProvidedService } from '../commons/services-provided.service';

@Component({
  selector: 'app-list-services',
  templateUrl: './list-services.component.html',
  styleUrls: ['./list-services.component.css']
})
export class ListServicesComponent implements OnInit {

  @Input()
  listServices: ServiceBackend[];

  @Output()
  edit = new EventEmitter<ServiceBackend>();

  constructor(private servicesProvided: ServicesProvidedService) { }

  ngOnInit() {
  }

  onClickEdit(service: ServiceBackend) {
    console.log('editar');
    console.log(service);
    this.edit.emit(service);
  }

  onClickDelete(id: number) {
    console.log('delete');
    this.servicesProvided.delete(id).subscribe((response)=> {
      console.log(response);
    });
  }

}
