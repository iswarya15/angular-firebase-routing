import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  // selector: 'hello',
  templateUrl: './hello.component.html',
  styles: [`h1 { font-family: Lato; }`],
})
export class HelloComponent {
  constructor(private router: Router) {}

  clickHandler() {
    // const confirm = prompt('Are you sure you wanna see? ');

    // if (confirm == 'yes') {
    this.router.navigate(['animal']);
    // } else {
    //   this.router.navigate(['']);
    // }
  }
}
