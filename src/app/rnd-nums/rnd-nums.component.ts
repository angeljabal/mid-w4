import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rnd-nums',
  templateUrl: './rnd-nums.component.html',
  styleUrls: ['./rnd-nums.component.css']
})
export class RndNumsComponent{

  constructor() { 
    this.generate()
  }

  rndNumber:any = []
  selected:any

  generate(){
    for (var x=0; x<6; x++){
      this.rndNumber.push(Math.floor(Math.random()*46)+1)
    }
  }

  buttonSelect(num: number){
    this.selected = num
  }
}
