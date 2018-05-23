import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compute-test',
  template: `
    <p>
      compute-test works!
    </p>
  `,
  styles: []
})
export class ComputeTestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.compute(-1)
  }

  compute(number) {
    if(number < 0) {
      return 0;
    }
    return 1;
  }



}
