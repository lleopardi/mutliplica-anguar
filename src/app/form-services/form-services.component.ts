import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ServicesProvidedService } from '../commons/services-provided.service';

@Component({
  selector: 'app-form-services',
  templateUrl: './form-services.component.html',
  styleUrls: ['./form-services.component.css']
})
export class FormServicesComponent implements OnInit {
  formService: FormGroup;

  constructor(private fb: FormBuilder, private servicesProvided: ServicesProvidedService) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.formService = this.fb.group({
      name: [''],
      description: [''],
    });
  }

  onSubmit() {
    this.servicesProvided.create(this.formService.value).subscribe((respnse) => {
      console.log(respnse);
    });
  }

  clearForm() {
    this.formService.reset();
  }
}
