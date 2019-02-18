import { Component, OnInit } from '@angular/core';
import { ServicesProvidedService } from './commons/services-provided.service';
import ServiceBackend from './commons/models/services.backend';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'ejercicio14';
  listServices: ServiceBackend[];
  constructor(private servicesProvide: ServicesProvidedService) { }

  ngOnInit(): void {
    this.getServices();
  }

  getServices() {
    this.servicesProvide.findAll().subscribe((response) => {
      this.listServices = response;
    });
  }

  onEdit(service: ServiceBackend) {
    console.log(service);
  }
}
