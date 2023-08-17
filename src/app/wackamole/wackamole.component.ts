import { Component } from '@angular/core';

@Component({
  selector: 'app-wackamole',
  templateUrl: './wackamole.component.html',
  styleUrls: ['./wackamole.component.css']
})
export class WackamoleComponent {
  
  state: boolean = true;
  interval: NodeJS.Timer | null = null;
  toggleButtonText:string = "StartTimer";
  clickCount:number = 0;

  toggleTimer() {
    if(this.interval)
    {
      clearInterval(this.interval);
      this.interval = null;
      this.toggleButtonText="StartTimer"
    }
    else
    {
      this.interval = setInterval( () => this.toggleState(), 1000)
      this.clickCount=0;
      this.toggleButtonText="StopTimer"
    }
  }

  toggleState(){
    this.state = !this.state;
  }

  click()
  {
    this.clickCount+=1;
  }
}
