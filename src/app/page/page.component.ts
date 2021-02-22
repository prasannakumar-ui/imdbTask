import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css'],
})
export class PageComponent implements OnInit {
  allData: any;
  SearchText: any;
  uid: any;
  su = false;
  su1 = false;
  su2 = false;
  pdata: any;
  newArray: any = [];
  constructor(
    private service: ServiceService) {}

  ngOnInit(): void {}

  searchIdName() {
    this.service.getA(this.SearchText).subscribe((res) => {
      this.allData = res;
    });
  }

  getMovie1(a: any) {
    this.service.getId(a?.imdbID).subscribe((res) => {
      this.pdata = res;
      this.su2 = true;
      this.su = true;
    });
  }
  back() {
    this.su = false;
  }
  getMovie2(a: any) {
    this.newArray.push(a?.Title);
    this.su1 = true;
    this.su = true;
    this.su2 = false;

    console.log(this.newArray);
  }
}
