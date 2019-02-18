import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ServicesProvidedService } from '../commons/services-provided.service';
import ServiceBackend from '../commons/models/services.backend';

@Component({
  selector: 'app-form-services',
  templateUrl: './form-services.component.html',
  styleUrls: ['./form-services.component.css']
})
export class FormServicesComponent implements OnInit, OnChanges {
  formService: FormGroup;
  isEdit = false;
  serviceToEdit: ServiceBackend;

  @Input()
  service: ServiceBackend;

  constructor(private fb: FormBuilder, private servicesProvided: ServicesProvidedService) { }

  ngOnInit() {
    this.createForm();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.service.firstChange) {
      return;
    }
    this.serviceToEdit = changes.service.currentValue;
    this.updateForm(this.serviceToEdit);
    this.isEdit = true;
  }

  createForm() {
    this.formService = this.fb.group({
      name: [''],
      description: [''],
    });
  }

  onSubmit() {
    if (this.isEdit) {
      const dataForm = this.formService.value;
      const id = this.serviceToEdit.id;
      this.servicesProvided.update(id, dataForm).subscribe((updated) => {
        console.log(updated);
        this.clearForm();
      });
    } else {
      this.servicesProvided.create(this.formService.value).subscribe((respnse) => {
        console.log(respnse);
        this.clearForm();
      });
    }
  }

  updateForm(service: ServiceBackend) {
    this.formService.patchValue({
      name: service.name,
      description: service.description
    });
  }

  clearForm() {
    this.formService.reset();
    this.isEdit = false;
  }
}
