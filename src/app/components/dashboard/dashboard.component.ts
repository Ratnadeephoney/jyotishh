import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router'
import { OthersComponent } from './others/others.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{

  jyothish = [
    {
      "classes":"category",
      "list":[
        {"classes":"categoryi","name":"Education","img":"assets/images/Astrology App-30.png"},
        {"classes":"categoryi","name":"Health","img":"assets/images/Astrology App-31.png"},
        {"classes":"categoryi","name":"Career","img":"assets/images/Astrology App-32.png"}
      ],
    },
    {
      "classes":"category",
      "list":[
        {"classes":"categoryi","name":"Marriage","img":"assets/images/Astrology App-33.png"},
        {"classes":"categoryi","name":"Business","img":"assets/images/Astrology App-34.png"},
        {"classes":"categoryi","name":"Other","img":"assets/images/Astrology App-35.png"}
      ]
    }
    
  ]
  constructor(private route: ActivatedRoute, private router: Router,private dialog: MatDialog)
  {

  }
  ngOnInit(): void {
    
  }
  OtherspopUp(){

    this.dialog.open(OthersComponent,{

      width: '450px',
      height : '300px',
      panelClass : 'custom-dialog-container'
      
    });

  }

  gotoCategory(ji:any)
  {
    ji.name === 'Other' ? this.OtherspopUp() :this.router.navigate(["/home/categories"], {relativeTo:this.route,state:{"from-dshToedu":ji}});
    console.log("ji => ",ji.name)
    
  }

}
