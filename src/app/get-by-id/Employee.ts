export default class Employee {
  empNo: any;
  empName: any;
  empSal: any;
  gender: any;
  doj: any;
  loginId: any;
  password: any;

  constructor(
    empNo: Number,
    empName: String,
    empSal: Number,
    gender: String,
    doj: String,
    loginId: String,
    password: String
  ) {
    this.empNo = empNo;
    this.empName = empName;
    this.empSal = empSal;
    this.gender = gender;
    this.doj = doj;
    this.loginId = loginId;
    this.password = password;
  }
}
