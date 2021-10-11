import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-crud',
  templateUrl: './class-crud.component.html',
  styleUrls: ['./class-crud.component.css']
})
export class ClassCrudComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToClassCreate(): void {
    this.router.navigate(['/classes/create']);
  }

}
