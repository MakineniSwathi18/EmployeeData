import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Employee Data';
  employees = [
    {empid:"01", fname:"Ranjith", lname:"Sakala", email:"ran@gmail.com", mobile:"1234567890"},
    {empid:"02", fname:"Pratap", lname:"Neelam", email:"neelam@yahoo.com", mobile:"2233445566"},
    {empid:"03", fname:"Kate", lname:"Bog", email:"kate@icloud.com", mobile:"3211233211"}
  ];
  model:any={};
  model2:any={};
  msg:any="";
  addEmployee(){
    this.employees.push(this.model);
    this.model = {};
     document.getElementById("formdiv").style.display = "none";

  }
  deleteEmployee(i){
    this.employees.splice(i,1);
   
    
  }
  myValue;
  editEmployee(k){
    document.getElementById("updatediv").style.display = "block";
    document.getElementById("updatediv").scrollIntoView();
    this.model2.empid = this.employees[k].empid;
    this.model2.fname = this.employees[k].fname;
    this.model2.lname = this.employees[k].lname;
    this.model2.email = this.employees[k].email;
    this.model2.mobile = this.employees[k].mobile;
    this.myValue = k;

  }
  updateEmployee(){
    let k= this.myValue;
    for(let i=0; i<this.employees.length;i++){
      if(i==k){
        this.employees[i]= this.model2;
        this.model2 = {};
        }

    }
document.getElementById("updatediv").style.display = "none";
  }
  clickMe(){
    this.msg = "";
  }
  dis(){
    document.getElementById("formdiv").style.display = "block";
    document.getElementById('formdiv').scrollIntoView();
  }
}
