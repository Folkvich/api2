
import { HttpClient } from '@angular/common/http';

import { Component, OnInit, ViewChild, } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

import { MatTableDataSource, } from '@angular/material/table';

import { DialogShowComponent } from './dialog-show/dialog-show.component';

import { MatTable } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {

  title = "hello,world"
  result1: any;
  result2: any;
  dataSource;
  dataLength = 0;
  currentPage;
  values1: any = "";
  values2: any = "";
  values3: any = "";
  displayedColumns: string[] = ['cake_id', 'cake_name', 'cake_price', 'cake_stock', 'Edit', 'Delete'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatTable, { static: true }) table: MatTable<any>;

  constructor(
    private api: HttpClient,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.api4(0, 10);
  }

  onPageChange1(event: PageEvent) {
    this.api4(event.pageIndex, event.pageSize)
    this.currentPage = event.pageIndex
  }

  async onPageChange2(filterValue) {
    await this.api4(0, 20,);
  }

  async onPageChange3(v1, v2, v3) {
    await this.insertCake(v1, v2, v3);
    await this.api4(0, 100,);

  }

  async onEdit() { }

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

  api4(page: number, pageSize: number) {
    fetch(`https://eupiwacc9g.execute-api.ap-southeast-1.amazonaws.com/v1/cake/con5?page=${page + 1}&pageSize=${pageSize}`,
      {
        method: 'GET',
      }).then(res => res.json()).then(res1 => {
        this.dataSource = new MatTableDataSource<Element>(res1.result.data);
        //this.dataSource.paginator = this.dataSource;
        //this.dataSource.filter = res1.result;
        this.dataLength = res1.result.total;
        // console.log('datatest')
        // console.log(res1)
        // console.log(this.dataSource)
        // console.log(">------------", this.dataLength)
      })



  }

  async insertCake(name: string, price: number, stock: number) {
    await fetch(`https://eupiwacc9g.execute-api.ap-southeast-1.amazonaws.com/v1/cake/con5`,
      {
        method: 'POST',
        body: JSON.stringify({ cake_name: name, cake_price: price, cake_stock: stock })
      }).then(res => res.json()).then(res1 => this.result2 = res1)
    this.dataSource = new MatTableDataSource<Element>(this.result2.result.data);
    //  this.dataSource.paginator = this.dataSource;
    this.dataSource.filter = this.result2.result;
    let dataTest = this.result2.result.data;
    console.log('datatest')
    console.log(this.result2)
    console.log(this.dataSource)
  }

  openDialog(action, obj) {
    obj.action = action;

    //console.log(obj)

    const dialogRef = this.dialog.open(DialogShowComponent, {
      width: '250px',
      data: obj
    });

    dialogRef.afterClosed().subscribe(result => {
      // if (result.event == 'Add') {
      //   this.addRowData(result.data);
      // } else if (result.event == 'Update') {
      //   this.updateRowData(result.data);
      // } else if (result.event == 'Delete') {
      //   this.deleteRowData(result.data);
      // }
    });
  }

  addRowData(row_obj) {
    var d = new Date();
    this.dataSource.push({
      id: d.getTime(),
      name: row_obj.name
    });
    this.table.renderRows();
  }

  updateRowData(row_obj) {
    this.dataSource = this.dataSource.filter((value, key) => {
      if (value.id == row_obj.id) {
        value.name = row_obj.name;
      }
      return true;
    });
  }

  deleteRowData(row_obj) {
    this.dataSource = this.dataSource.filter((value, key) => {
      return value.id != row_obj.id;
    });
  }

}

