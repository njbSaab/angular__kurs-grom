import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.scss']
})
export class BindingComponent implements OnInit{
  phone = '0931112233'
  user = {
    name: 'Nj',
    surname: 'Saab'
  }

  boldText = `<b> I am bold text </b>`

  login = ""
  password = ""
  constructor() {}

 get fullName(){
    return this.user.name + ' ' + this.user.surname;
 }
  ngOnInit(): void {
    setTimeout( () => this.updatePhone(), 3000)
  }

  updatePhone(){
    this.phone = Math.round(Math.random() * 10000000) + ""
  }

  onInput(event: Event){
    const  target = event.target as HTMLInputElement
    this.phone = target.value
  }

  onSubmit(){
    if(this.login && this.password){
      alert(`you are authorized as ${this.login} with passw ${this.password}`)

      this.login = this.password =''
      return
    }
    alert('login and pass are required fields')
  }

}


