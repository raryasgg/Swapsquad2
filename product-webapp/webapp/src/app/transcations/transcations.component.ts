import { Component, OnInit } from '@angular/core';
import {Abc} from "./model/abc";

interface transcation {
  value: string;
}



@Component({
  selector: 'app-transcations',
  templateUrl: './transcations.component.html',
  styleUrls: ['./transcations.component.css']
})

export class TranscationsComponent implements OnInit {
  selectedValue: string= "Coin";
  public stars: boolean[] = [false,false,false,false,false]

  public rate(rating: number) {
    console.log('rating', rating);
    this.stars = this.stars.map((_, i) => rating > i);
    console.log('stars', this.stars);
  }

  transcations: transcation[] = [
    {value: 'Sold Products'},
    {value: 'Purchased Products'},
    
  ];

  title = 'abc';
  car:any="Car";
  name="anupam";
  email="abc@gmail.com"
  empList: Array<Abc> = [];
  constructor() { }

  ngOnInit(): void {
    let abc = new Abc();
    abc.a="vijay"
    abc.b="vijay@gmail.com"
    this.empList.push(abc);
    let absc = new Abc();
    absc.a="vijay"
    absc.b="vijay@gmail.com"
    this.empList.push(absc);
    let abwc = new Abc();
    abwc.a="vijay"
    abwc.b="vijay@gmail.com"
    this.empList.push(abwc);
  }

}
