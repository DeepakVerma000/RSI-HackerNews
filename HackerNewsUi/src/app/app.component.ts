/**
*
* @name: app.component.ts
*
* @description: This is root component file.
*
*
**/

import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource, } from '@angular/material/table';
import { ApiService } from './shared/apiService.service';
import { StoryModel } from './models/story.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private service: ApiService) {
  }

 public displayedColumns: string[] = ['title', 'url'];
 public dataSource = new MatTableDataSource<StoryModel>();
  
  ngOnInit(): void {
    this.loadStoryList();
  }

  // Get all story list details.
 public loadStoryList(): void {
    this.service.getAllStoryList().subscribe((storyList: StoryModel[]) => {
      this.dataSource = new MatTableDataSource<StoryModel>(storyList);
      this.dataSource.paginator = this.paginator;
    });
  }

    // Get data based on search filter.
 public applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}


