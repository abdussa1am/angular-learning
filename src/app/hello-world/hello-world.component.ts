import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../_services/weather';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent implements OnInit {

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.weatherService.getdata().subscribe(
      (data: any) => {console.log(data)}
    );
  }
  col:string = 'black'
  val:string = '';
  font:string = '20px'
  abc: number


  get _val(): string{
    return this.val;
  }
  set _val(val: string){
    this.val = val;
  }
}
