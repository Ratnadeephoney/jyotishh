import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router){

  }
  ngOnInit(): void {
    // this.gotoHoe()
    let Jyotishhbody:any = document.getElementsByClassName('Jyotishh-body')
    if(Jyotishhbody[0]){ Jyotishhbody[0].style = `overflow-x:hidden;`}
  }
  gotoHoe(){
    this.router.navigate(["/dashboard"], {relativeTo:this.route});
  }
  pageNavigation(page:string)
  {
    this.router.navigate([page], {relativeTo:this.route});
  }

  languagePopup() {
    let popup:any = document.getElementById("myPopup");
    popup.classList.toggle("show");
  }
}
