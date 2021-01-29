
import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy,Component, OnInit, ViewChild, } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource, } from '@angular/material/table';
import {CollectionViewer, DataSource} from '@angular/cdk/collections';
import {BehaviorSubject, Observable, Subscription} from 'rxjs';
import { dataSourceInterface } from './interface/datasource.interface';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class AppComponent implements OnInit {

  title = "hello,world"
  result1: any = {};
  result2: any;
  dataSource;
  values: any;
  displayedColumns: string[] = ['cake_id', 'cake_name', 'cake_price'];
  pageSize: any;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private api: HttpClient) { }


  ngOnInit(): void {
    this.api4(0, 20);
  }


  onPageChange1(event: PageEvent) {
    this.api4(event.pageIndex, event.pageSize)
  }


  async onPageChange2(filterValue) {
    await this.api4(0, 20,);
  }


  async api4(page: number, pageSize: number) {

    await fetch(`https://eupiwacc9g.execute-api.ap-southeast-1.amazonaws.com/v1/cake/con5?page=${page + 1}&pageSize=${pageSize}`,
      {
        method: 'GET',
      }).then(res => res.json()).then(res1 => this.result2 = res1)


    this.dataSource = new MatTableDataSource<Element>(this.result2.result.data);
    this.dataSource.paginator = this.dataSource;
    this.dataSource.filter = this.result2.result;
    
  }

}

  


