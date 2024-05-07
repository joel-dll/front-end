import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-studentcrud',
  templateUrl: './studentcrud.component.html',
  styleUrls: ['./studentcrud.component.scss']
})
export class StudentcrudComponent 
{


  StudentArray : any[] = [];
  currentStudentID = "";

  name: string ="";
  age: string ="";
  parentcontact: string ="";
  allergies: string ="";
  specialnotes: string ="";
  
  constructor(private http: HttpClient ) 
  {
    this.getAllStudent();
  }
  getAllStudent() {

    this.http.get("http://localhost:8000/user/getAll")
    .subscribe((resultData: any)=>
    {
       
        console.log(resultData);
        this.StudentArray = resultData.data;
    });


  }

  setUpdate(data: any) 
  {
   this.name = data.name;
   this.age = data.age;
   this.parentcontact = data.parentcontact;
   this.allergies = data.allergies;
   this.specialnotes = data.specialnotes;

   this.currentStudentID = data._id;
  
  }

  UpdateRecords()
  {
    let bodyData = {
      "name" : this.name,
      "age" : this.age,
      "parentcontact" : this.parentcontact,
      "allergies" : this.allergies,
      "specialnotes" : this.specialnotes


    };
    
    this.http.patch("http://localhost:8000/user/update"+ "/"+this.currentStudentID,bodyData).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Child information Updated")
        this.getAllStudent();
      
    });
  }
  
  setDelete(data: any) {
    this.http.delete("http://localhost:8000/user/delete"+ "/"+ data._id).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Child information Deleted")
        this.getAllStudent();
   
    });
    }
    
  save()
  {
    if(this.currentStudentID == '')
    {
        this.register();
    }
      else
      {
       this.UpdateRecords();
      }       

  }

register()
  {

    let bodyData = {
      "name" : this.name,
      "age" : this.age,
      "parentcontact" : this.parentcontact,
      "allergies" : this.allergies,
      "specialnotes" : this.specialnotes
    };
    
      this.http.post("http://localhost:8000/user/create",bodyData).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Child Registered Successfully")
         //this.getAllEmployee();
        this.name = '';
        this.age = '';
        this.parentcontact  = '';
        this.allergies = '';
        this.specialnotes = '';
        
        this.getAllStudent();
    
    });
  }
}