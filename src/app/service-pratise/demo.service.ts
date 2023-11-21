import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DemoService {
  
  Name(name: string) {
    console.log("My full name is "+name+" Santhakumar");
  }

  constructor() { }
}
