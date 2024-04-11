import { Component, OnInit } from '@angular/core';
import print from "print-js";

@Component({
  selector: 'app-json',
  templateUrl: './json.component.html',
  styleUrls: ['./json.component.css']
})
export class JsonComponent implements OnInit {


  someJSONdata = [
    {
       name: 'John Doe',
       email: 'john@doe.com',
       phone: '111-111-1111'
    },
    {
       name: 'Barry Allen',
       email: 'barry@flash.com',
       phone: '222-222-2222'
    },
    {
       name: 'Cool Dude',
       email: 'cool@dude.com',
       phone: '333-333-3333'
    }
 ];

  constructor() { }

  ngOnInit(): void {
  }

  printJson(){
    print({
	    printable: this.someJSONdata,
      properties: [
        { field: 'name', displayName: 'Full Name'},
        { field: 'email', displayName: 'E-mail'},
        { field: 'phone', displayName: 'Phone'}
      ],
      type: 'json',
	    gridHeaderStyle: 'color: red;  border: 2px solid #3971A5;',
	    gridStyle: 'border: 2px solid #3971A5;',
      header: '<h3 class="custom-h3">My custom header</h3>',

	})
  }

}
