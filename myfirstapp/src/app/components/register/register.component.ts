import { Component,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  usrName="";
  usrAge="";
  @Output() myEvent = new EventEmitter();
  Add(){
    let newStudent = {name:this.usrName, age:this.usrAge};
    if(+this.usrAge<40 && +this.usrAge>20 && this.usrName.length>=3)
    {
      this.myEvent.emit(newStudent);
    this.usrAge = "";
    this.usrName = "";
    }
  }
}
