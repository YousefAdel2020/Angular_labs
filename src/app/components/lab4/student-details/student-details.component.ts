import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent {
id=0;
constructor(myRoute:ActivatedRoute)
{
  this.id=myRoute.snapshot.params["id"];
}
}
