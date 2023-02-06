import { Component } from '@angular/core';


interface User {
  id: number
  name: string
  template: string
}

@Component({
  selector: 'app-ng-if-ng-for',
  templateUrl: './ng-if-ng-for.component.html',
  styleUrls: ['./ng-if-ng-for.component.scss']
})
export class NgIfNgForComponent {
  expression = true
  deepObj: any = null;

  users: User[] =[
    {
      id:1,
      name: 'Boris',
      template: 'bold'
    },
    {
      id:2,
      name: 'Denis',
      template: 'italic'
    },
    {
      id:3,
      name: 'Berg',
      template: 'unknow'
    }
  ]

  generateUser() {
    this.deepObj = {
      user: {
        name: 'Nj',
        surName:'Saab'
      }
    }
  }
  trackBy(index: number, user: User){
    return user.id
  }
}
