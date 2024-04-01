import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: ``
})
export class HomeComponent {
  title = 'Mean Stack Agency';
  nums = [10,20,25,33,40,56];
  sum = () =>{
    return this.nums[0]+this.nums[1];
  }
  red = "color:red";
  green = "color:green";

  message = "";
  clickMe = (val: string) =>{
    console.log(val);
    this.message = val;
  }

  show=true;
  toggle(){
    this.show = !this.show;
  }
  inc(){
    this.nums.push(Math.floor(Math.random()*100));
  }
  dec(){
    this.nums.pop();
  }
}
