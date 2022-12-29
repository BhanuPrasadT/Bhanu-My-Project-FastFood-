import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';
import { User } from '../user';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  user:User[]=[]
  constructor(private testserve:TestService) { }

  ngOnInit(): void {
  }
  getalluserinfo(){
    this.testserve.getallusers().subscribe(user=>{
     this.user=user;
    });
  }

}
