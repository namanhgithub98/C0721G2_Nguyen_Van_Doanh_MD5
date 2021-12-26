import { Component, OnInit } from '@angular/core';
import {Division} from "../model/division";
import {EducationDegree} from "../model/education-degree";
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {EmployeeServiceService} from "../service/employee-service.service";
import {Router} from "@angular/router";
import {Position} from "../model/position";

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  positions: Position[] = [];
  divisions: Division[] = [];
  educationDegrees: EducationDegree[] = [];
  createForm: FormGroup;

  constructor(private employeeService: EmployeeServiceService, private router: Router) {
    this.createForm = new FormGroup({
      employeeName: new FormControl('',
        [Validators.required,
          Validators.pattern('[A-ZẮẰẲẴẶĂẤẦẨẪẬÂÁÀÃẢẠĐẾỀỂỄỆÊÉÈẺẼẸÍÌỈĨỊỐỒỔỖỘÔỚỜỞỠỢƠÓÒÕỎỌỨỪỬỮỰƯÚÙỦŨỤÝỲỶỸỴ]' +
            '[a-zàáâãèéêìíòóôõùúăđĩũơưăạảấầẩẫậắằẳẵặẹẻẽềềểễệỉịọỏốồổỗộớờởỡợụủứừửữựỳỵỷỹ]+' +
            '(([ ][A-ZẮẰẲẴẶĂẤẦẨẪẬÂÁÀÃẢẠĐẾỀỂỄỆÊÉÈẺẼẸÍÌỈĨỊỐỒỔỖỘÔỚỜỞỠỢƠÓÒÕỎỌỨỪỬỮỰƯÚÙỦŨỤÝỲỶỸỴ]' +
            '[a-zàáâãèéêìíòóôõùúăđĩũơưăạảấầẩẫậắằẳẵặẹẻẽềềểễệỉịọỏốồổỗộớờởỡợụủứừửữựỳỵỷỹ]+)' +
            '|([ ][A-ZẮẰẲẴẶĂẤẦẨẪẬÂÁÀÃẢẠĐẾỀỂỄỆÊÉÈẺẼẸÍÌỈĨỊỐỒỔỖỘÔỚỜỞỠỢƠÓÒÕỎỌỨỪỬỮỰƯÚÙỦŨỤÝỲỶỸỴ]))+')]),
      employeeBirthday: new FormControl('', [Validators.required, this.check]),
      employeeIdCard: new FormControl('',
        [Validators.required, Validators.pattern('^([0-9]{9}|[0-9]{12})$')]),
      employeeSalary: new FormControl('', [Validators.required, Validators.min(0)]),
      employeePhone: new FormControl('',
        [Validators.required, Validators.pattern('^(090|091|\\(84\\)\\+90|\\(84\\)\\+91)[0-9]{7}$')]),
      employeeEmail: new FormControl('',
        [Validators.required, Validators.email]),
      employeeAddress: new FormControl('',
        [Validators.required,
          Validators.pattern('[A-ZẮẰẲẴẶĂẤẦẨẪẬÂÁÀÃẢẠĐẾỀỂỄỆÊÉÈẺẼẸÍÌỈĨỊỐỒỔỖỘÔỚỜỞỠỢƠÓÒÕỎỌỨỪỬỮỰƯÚÙỦŨỤÝỲỶỸỴ]' +
            '[a-zàáâãèéêìíòóôõùúăđĩũơưăạảấầẩẫậắằẳẵặẹẻẽềềểễệỉịọỏốồổỗộớờởỡợụủứừửữựỳỵỷỹ]+' +
            '(([ ][A-ZẮẰẲẴẶĂẤẦẨẪẬÂÁÀÃẢẠĐẾỀỂỄỆÊÉÈẺẼẸÍÌỈĨỊỐỒỔỖỘÔỚỜỞỠỢƠÓÒÕỎỌỨỪỬỮỰƯÚÙỦŨỤÝỲỶỸỴ]' +
            '[a-zàáâãèéêìíòóôõùúăđĩũơưăạảấầẩẫậắằẳẵặẹẻẽềềểễệỉịọỏốồổỗộớờởỡợụủứừửữựỳỵỷỹ]+)' +
            '|([ ][A-ZẮẰẲẴẶĂẤẦẨẪẬÂÁÀÃẢẠĐẾỀỂỄỆÊÉÈẺẼẸÍÌỈĨỊỐỒỔỖỘÔỚỜỞỠỢƠÓÒÕỎỌỨỪỬỮỰƯÚÙỦŨỤÝỲỶỸỴ]))+')]),
      position: new FormControl('', Validators.required),
      division: new FormControl('', Validators.required),
      educationDegree: new FormControl('', Validators.required)
    });
  }

  ngOnInit(): void {
    this.getPosition();
    this.getDivision();
    this.getEducationDegree();
  }

  getPosition() {
    this.employeeService.getAllPosition().subscribe(data => {
      this.positions = data;
    });
  }

  getDivision() {
    this.employeeService.getAllDivision().subscribe(data => {
      this.divisions = data;
    });
  }

  getEducationDegree() {
    this.employeeService.getAllEducationDegree().subscribe(data => {
      this.educationDegrees = data;
    });
  }

  submitForm() {
    const employee = this.createForm.value;
    this.employeeService.saveEmployee(employee).subscribe(() => {
      this.router.navigateByUrl('/employee-list');
      this.alert();
    });
  }

  check(birthDay: AbstractControl): any {
    const confim = birthDay.value;
    const inputYear = Number(confim.substr(0, 4));
    const currentYear = new Date().getFullYear();
    return currentYear - inputYear >= 18 ? null : {invalid: true};
  }

  alert() {
    // this.toast.success('Create successfuly!!!', 'title');
    console.log('Create successfuly!!!', 'title');
  }
}
