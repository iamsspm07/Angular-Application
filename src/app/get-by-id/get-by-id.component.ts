import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-by-id',
  templateUrl: './get-by-id.component.html',
  styleUrls: ['./get-by-id.component.css']
})
export class GetByIdComponent implements OnInit {
  Employees: Employee[] = [];
  foundEmployee: any;

  constructor() {
    // ---------
    this.Employees = [
      new Employee(
        1,
        'Surendra Jangid',
        40000,
        'Male',
        '07/18/2018',
        'surendraj454@gmail.com',
        'Surendra@123'
      ),
      new Employee(
        2,
        'Aman Thakur',
        45000,
        'Male',
        '07/18/2018',
        'amanthakur@gmail.com',
        'Aman@123'
      ),
      new Employee(
        3,
        'Girraj Shitole',
        50000,
        'Male',
        '07/18/2018',
        'girraj@gmail.com',
        'Girraj@123'
      ),
      new Employee(
        4,
        'Gaurav Kamble',
        55000,
        'Male',
        '07/18/2018',
        'gauravkamble@gmail.com',
        'Gaurav@123'
      ),
      new Employee(
        5,
        'XYZ',
        55000,
        'Female',
        '07/18/2018',
        'xyz@gmail.com',
        'Xyz@123'
      ),
    ];

    this.foundEmployee = null;
  }

  ngOnInit(): void {}

  getEmployee(employee: any) {
    this.Employees.forEach((emp) => {
      if (emp.empNo == employee.empid) {
        this.foundEmployee = emp;
      }
    });

    if ((this.foundEmployee == null)) {
      alert('Employee not found');
    }
  }
}
