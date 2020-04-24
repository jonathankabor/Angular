import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-parameters',
  templateUrl: './parameters.component.html',
  styleUrls: ['./parameters.component.css']
})
export class ParametersComponent implements OnInit {

  name: string;
  page: string;
  fragment: string;

  constructor(private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {

    /**
     * param: Array
     * paramMap: Object
     */
    this.route.paramMap.subscribe((params: ParamMap) => {
      if (params.has('name')) {
        this.name = params.get('name');
      }
    });

    /**
     * queryParam: Array
     * queryParamMap: Object
     */
    this.route.queryParamMap.subscribe((queryparam: ParamMap) => {
      if (queryparam.has('page')) {
        this.page = queryparam.get('page');
      } else {
        this.page = '1';
      }
    });

    this.route.fragment.subscribe( (fragment: string) => {
      this.fragment = fragment;
    });
  }

  public goBack(): void {
    this.router.navigateByUrl('/parameters');
  }

}
