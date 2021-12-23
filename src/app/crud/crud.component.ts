import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
export interface PeriodicElement {
  name: string;
  color: string;
  price: number;
  
}

const car : PeriodicElement[] = [
  { name: "bmw", color: "red", price: 34, },
  { name: "toyota", color: "yellow", price: 34, },
  { name: "suzuki", color: "green", price: 34, },
  { name: "honda", color: "blue", price: 34, },
]
@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

}

displayedColumns: string[] = ['name', 'color', 'price'];

  dataSource = new MatTableDataSource(car);
  
  // applyFilter(filterValue: string) {
   
  //   this.dataSource.filter = filterValue.trim().toLowerCase();

  // }
}
