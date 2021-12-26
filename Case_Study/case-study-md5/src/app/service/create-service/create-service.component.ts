import { Component, OnInit } from '@angular/core';
import {RenType} from "../model/ren-type";
import {ServiceType} from "../model/service-type";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ServiceService} from "../service/service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-service',
  templateUrl: './create-service.component.html',
  styleUrls: ['./create-service.component.css']
})
export class CreateServiceComponent implements OnInit {
  renTypes: RenType[] = [];
  serviceTypes: ServiceType[] = [];
  createForm: FormGroup;

  constructor(private serviceService: ServiceService, private router: Router) {
    this.createForm = new FormGroup({
      serviceCode: new FormControl('',
        [Validators.required, Validators.pattern('^(DV)-[0-9]{4}$')]),
      serviceName: new FormControl('',
        [Validators.required,
          Validators.pattern('^([A-Z][a-z0-9]*[\s]?)+$')]),
      serviceArea: new FormControl('', [Validators.required, Validators.min(0)]),
      serviceCost: new FormControl('', [Validators.required, Validators.min(0)]),
      serviceMaxPeople: new FormControl('', [Validators.required, Validators.min(0)]),
      standardRoom: new FormControl('',
        [Validators.required,
          Validators.pattern('[A-ZẮẰẲẴẶĂẤẦẨẪẬÂÁÀÃẢẠĐẾỀỂỄỆÊÉÈẺẼẸÍÌỈĨỊỐỒỔỖỘÔỚỜỞỠỢƠÓÒÕỎỌỨỪỬỮỰƯÚÙỦŨỤÝỲỶỸỴ]' +
            '[a-zàáâãèéêìíòóôõùúăđĩũơưăạảấầẩẫậắằẳẵặẹẻẽềềểễệỉịọỏốồổỗộớờởỡợụủứừửữựỳỵỷỹ]+' +
            '(([ ][A-ZẮẰẲẴẶĂẤẦẨẪẬÂÁÀÃẢẠĐẾỀỂỄỆÊÉÈẺẼẸÍÌỈĨỊỐỒỔỖỘÔỚỜỞỠỢƠÓÒÕỎỌỨỪỬỮỰƯÚÙỦŨỤÝỲỶỸỴ]' +
            '[a-zàáâãèéêìíòóôõùúăđĩũơưăạảấầẩẫậắằẳẵặẹẻẽềềểễệỉịọỏốồổỗộớờởỡợụủứừửữựỳỵỷỹ]+)' +
            '|([ ][A-ZẮẰẲẴẶĂẤẦẨẪẬÂÁÀÃẢẠĐẾỀỂỄỆÊÉÈẺẼẸÍÌỈĨỊỐỒỔỖỘÔỚỜỞỠỢƠÓÒÕỎỌỨỪỬỮỰƯÚÙỦŨỤÝỲỶỸỴ]))+')]),
      descriptionOtherConvenience: new FormControl('',
        [Validators.required,
          Validators.pattern('[A-ZẮẰẲẴẶĂẤẦẨẪẬÂÁÀÃẢẠĐẾỀỂỄỆÊÉÈẺẼẸÍÌỈĨỊỐỒỔỖỘÔỚỜỞỠỢƠÓÒÕỎỌỨỪỬỮỰƯÚÙỦŨỤÝỲỶỸỴ]' +
            '[a-zàáâãèéêìíòóôõùúăđĩũơưăạảấầẩẫậắằẳẵặẹẻẽềềểễệỉịọỏốồổỗộớờởỡợụủứừửữựỳỵỷỹ]+' +
            '(([ ][A-ZẮẰẲẴẶĂẤẦẨẪẬÂÁÀÃẢẠĐẾỀỂỄỆÊÉÈẺẼẸÍÌỈĨỊỐỒỔỖỘÔỚỜỞỠỢƠÓÒÕỎỌỨỪỬỮỰƯÚÙỦŨỤÝỲỶỸỴ]' +
            '[a-zàáâãèéêìíòóôõùúăđĩũơưăạảấầẩẫậắằẳẵặẹẻẽềềểễệỉịọỏốồổỗộớờởỡợụủứừửữựỳỵỷỹ]+)' +
            '|([ ][A-ZẮẰẲẴẶĂẤẦẨẪẬÂÁÀÃẢẠĐẾỀỂỄỆÊÉÈẺẼẸÍÌỈĨỊỐỒỔỖỘÔỚỜỞỠỢƠÓÒÕỎỌỨỪỬỮỰƯÚÙỦŨỤÝỲỶỸỴ]))+')]),
      poolArea: new FormControl('', [Validators.required, Validators.min(0)]),
      numberOfFloors: new FormControl('', [Validators.required, Validators.min(0)]),
      renType: new FormControl('', Validators.required),
      serviceType: new FormControl('', Validators.required)
    });
  }

  ngOnInit(): void {
    this.getRenType();
    this.getServiceType();
  }

  getRenType() {
    this.serviceService.getAllRenType().subscribe(data => {
      this.renTypes = data;
    });
  }

  getServiceType() {
    this.serviceService.getAllServiceType().subscribe(data => {
      this.serviceTypes = data;
    });
  }

  submitForm() {
    const service = this.createForm.value;
    this.serviceService.saveService(service).subscribe(() => {
      this.router.navigateByUrl('/service-list');
      this.alert();
    });
  }

  alert() {
    // this.toast.success('Create successfuly!!!', 'title');
    console.log('Create successfuly!!!', 'title');
  }

}
