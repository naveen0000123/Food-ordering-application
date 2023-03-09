import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import * as AOS from 'aos';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(public route: Router) { }
  rot(){
    this.route.navigate(['/login'])
  }
  ngOnInit(): void {
    // AOS.init();
  
  }

}
