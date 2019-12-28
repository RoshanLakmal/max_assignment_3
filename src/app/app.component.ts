import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
showSecret = false;
myLog = [];
onToggleDisplay(){
  this.showSecret = !this.showSecret;
  this.myLog.push(this.myLog.length + 1);
}
  // showParagraph = "none";
  // myLog = [];
  // count = 1;
  // onDisplay(){
  //   if(this.showParagraph === "none"){
  //     this.showParagraph = "block"; 
  //   }else{
  //     this.showParagraph = "none";
  //   }
  //   this.myLog.push(this.count);
  //   this.count++; 
  //   console.log(this.showParagraph);
  //   console.log(this.myLog);
  // }
}
