import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
    
    // let mre:any = document.getElementsByClassName('main-root-element')
    // if(mre[0])
    //   {
    //     mre[0].style.height = `${window.innerHeight - 20}px`
    //     mre[0].style.border = "2px solid green"
    //   }
  }
  title = 'jyotishh';
}
