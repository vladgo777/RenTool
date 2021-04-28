import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'search-line2',
  templateUrl: './search-line2.component.html',
  styleUrls: ['./search-line2.component.scss']
})
export class SearchLine2Component implements OnInit {
// @Input data :any;
  data: any;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.data = this.route.params.subscribe(params => {
      console.log(params);
    });
  }

}
