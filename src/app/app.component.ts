
import { HttpClient } from '@angular/common/http';

import { Component, OnInit, ViewChild, } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

import { MatTableDataSource, } from '@angular/material/table';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {



  title = "hello,world"
  result1: any = {};
  result2: any;
  dataSource;
  values: any;

  displayedColumns: string[] = ['cake_id', 'cake_name', 'cake_price'];



  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private api: HttpClient) { }


  ngOnInit(): void {

    this.api4(0, 10);
  }


  onPageChange1(event: PageEvent) {

    this.api4(event.pageIndex, event.pageSize)

  }


  async onPageChange2(filterValue) {
    await this.api4(0, 20,);

  }


  // api1(): void {
  //   this.api.post('https://eupiwacc9g.execute-api.ap-southeast-1.amazonaws.com/v1/users',
  //     { username: "admin3", password: "00ae8756480e802ca09599300475b500b18ed6ea" }).subscribe
  //     (
  //       res => {
  //         this.result1 = res;
  //       }
  //     );

  //   console.log(this.result1)
  //   console.log(this.result2)
  // }

  // async api3(page: number, pageSize: number, keyword: string) {

  //   await fetch(`https://eupiwacc9g.execute-api.ap-southeast-1.amazonaws.com/v1/stores?page=${page + 1}&pageSize=${pageSize}&keyword=${keyword}&filter=0`,
  //     {
  //       method: 'GET'//,
  //       //headers: { 'authorization': this.result1.result }
  //     }).then(res => res.json()).then(res1 => {
  //       console.log('xxxxxxxx', res1);
  //       this.result2 = res1;
  //     })

  //   this.dataSource = new MatTableDataSource<Element>(this.result2.result.data);
  // }



  // async api2(page: number, pageSize: number) {



  //   await fetch(`https://eupiwacc9g.execute-api.ap-southeast-1.amazonaws.com/v1/stores?page=${page + 1}&pageSize=${pageSize}`,
  //     {
  //       method: 'GET',
  //       headers: { 'authorization': this.result1.result }
  //     }).then(res => res.json()).then(res1 => this.result2 = res1)




  //   this.dataSource = new MatTableDataSource<Element>(this.result2.result.data);

  //   this.dataSource.paginator = this.dataSource;


  //   let dataTest = this.result2.result.data;


  //   console.log('datatest')
  //   console.log(dataTest.filter(e => e['storeId'] === '00000'))

  //   console.log(this.result1)
  //   console.log(this.result2)
  //   console.log(this.dataSource)



  // }


  async api4(page: number, pageSize: number) {



    await fetch(`https://eupiwacc9g.execute-api.ap-southeast-1.amazonaws.com/v1/cake/con5?page=${page + 1}&pageSize=${pageSize}`,
      {
        method: 'GET',
      }).then(res => res.json()).then(res1 => this.result2 = res1)


    this.dataSource = new MatTableDataSource<Element>(this.result2.result.data);

    this.dataSource.paginator = this.dataSource;

    this.dataSource.filter = this.result2.result;


    let dataTest = this.result2.result.data;
    console.log('datatest')




    console.log(dataTest.filter(e => e['cake_id'] === '00000'))



    console.log(this.result1)
    console.log(this.result2)
    console.log(this.dataSource)


  }



}

