import { Component, OnInit } from '@angular/core';

import  { DataService } from '../../services/data.service'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  name : String;
  age : number;
  email: String;
  address : Address;
  hobbies : String[];
  posts : Post[];
  isEdit : boolean;

  constructor(private dataService: DataService) { 

  }

  ngOnInit() {
    this.name = 'gopal';
    this.age = 22;
    this.email = 'gopalharis@gmail.com'
    this.address = {
      street : '10 main road',
      city : 'chennai',
      state : 'TN'
    }
    this.hobbies = ['coding', 'eating'];

    this.dataService.getPosts().subscribe(posts => {
      this.posts = posts
    })
  }

  onClick() {
    this.name = 'Surya';
    this.hobbies.push('Walking');
  }

  addHobbie(hobiie) {
    console.log(hobiie);
    this.hobbies.unshift(hobiie);
    return false;
  }

  removeHobby(hobby) {
      console.log(hobby);
      for(let i=0; i<this.hobbies.length; i++) {
        if(this.hobbies[i]==hobby) {
          this.hobbies.splice(i);
        }
      }
  }

  toggleEdit() {
    this.isEdit = ! this.isEdit;
  }

}

interface Address {
  street : String,
  city : String,
  state : String
}

interface Post {
  id : number,
  title : String,
  body : String
}