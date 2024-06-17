import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  routeNav:any = [
    {name:"Be an Astrologer",url:"/home/client",class:"client"},
    {name:"Search Astrologers",url:"/home/astrologers",class:"astrologer"},
    {name:"Contact us",url:"/home/contactus",class:"contactus"},
    {name:"Languages",url:"/home/client",class:"languages"},
    {name:"Login",url:"/login",class:"client-profile"},
    // {name:"Login",url:"/login",class:"login"},
  ]
  
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
