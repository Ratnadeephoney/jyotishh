import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router'
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
        {"classes":"categoryi","name":"Buisness","img":"assets/images/Astrology App-34.png"},
        {"classes":"categoryi","name":"Other","img":"assets/images/Astrology App-35.png"}
      ]
    }
    
  ]
  constructor(private route: ActivatedRoute, private router: Router)
  {

  }
  ngOnInit(): void {
    
  }


  gotoCategory(ji:any)
  {
    console.log("ji => ",ji.name)
    this.router.navigate(["/home/categories"], {relativeTo:this.route,state:{"from-dshToedu":ji}});
  }

}
