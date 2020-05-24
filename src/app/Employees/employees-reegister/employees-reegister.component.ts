import { Component, OnInit } from '@angular/core';
import {EmployeserService} from '../../Service/employeser.service';
import {EmployeeMdel} from '../../Model/employee-mdel';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-employees-reegister',
  templateUrl: './employees-reegister.component.html',
  styleUrls: ['./employees-reegister.component.css']
})
export class EmployeesReegisterComponent implements OnInit {
  id: EmployeeMdel['_id'];
  name: EmployeeMdel['name'];
  position: EmployeeMdel['position'];
  office: EmployeeMdel['office'];
  salary: EmployeeMdel['salary'];
  post: Object;
  constructor(public empser: EmployeserService) { }

  ngOnInit() {
  }

  onSubmit(postForm: NgForm) {
    if (postForm.invalid) {
      return;
    }
    this.empser.addPost(postForm.value)
      .subscribe((data) => {
        this.post = data;
      });
    console.log('Employees added');
    postForm.resetForm();
  }

  onReset(Form?: NgForm) {
    Form.resetForm();
  }

}
