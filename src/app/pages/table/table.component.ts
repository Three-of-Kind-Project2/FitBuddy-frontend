import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  userhomePage(): void {
    this.router.navigateByUrl("/userhome")
  }
}
