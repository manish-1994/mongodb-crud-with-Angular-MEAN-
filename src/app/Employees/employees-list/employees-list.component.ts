import { Component, OnInit } from '@angular/core';
import {EmployeserService} from '../../Service/employeser.service';
import {EmployeeMdel} from '../../Model/employee-mdel';
import {HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {
  // tslint:disable-next-line:ban-types
  comments: Object;
  compressed = false;
  employer: EmployeeMdel [];
  id: EmployeeMdel['_id'];
  name: EmployeeMdel['name'];
  position: EmployeeMdel['position'];
  offices: EmployeeMdel['office'];
  salarys: EmployeeMdel['salary'];
  employee: EmployeeMdel;

  constructor(public empser: EmployeserService) {
  }

  ngOnInit() {
    this.onGet();
  }

  onGet() {
    this.empser.getPost().subscribe((data) => {
      this.employer = data;
    });
  }


  onEdit(event, data) {
      this.compressed = true;
      this.employee = data;
  }

  onReset(postForm: NgForm) {
    postForm.resetForm();
  }

  onDelete(id: any) {
    this.empser.deletePost(id).subscribe((data) => {
      this.comments = data as EmployeeMdel[];
      this.onGet();
    });
  }

  onUpdate(postForm: NgForm, id: any) {
    this.empser.updatePost(postForm.value, id).subscribe((data) => {
      this.comments = data ;
    });
    this.onGet();
  }

  closed(form: NgForm) {
    form.resetForm();
    this.compressed = false;
  }
}
