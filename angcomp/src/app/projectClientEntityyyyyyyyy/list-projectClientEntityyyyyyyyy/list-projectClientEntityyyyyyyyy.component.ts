import { Component, ViewChild, OnInit } from "@angular/core";
import { ProjectClientEntityyyyyyyyyService } from "../projectClientEntityyyyyyyyy.service";
import { ProjectClientEntityyyyyyyyy } from "../projectClientEntityyyyyyyyy";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";

@Component({
  selector: "app-list-projectClientEntityyyyyyyyy",
  templateUrl: "./list-projectClientEntityyyyyyyyy.component.html",
  styleUrls: ["./list-projectClientEntityyyyyyyyy.component.css"],
})
export class ListProjectClientEntityyyyyyyyyComponent implements OnInit {
  data: ProjectClientEntityyyyyyyyy[] = [];
  dataSource = new MatTableDataSource<ProjectClientEntityyyyyyyyy>();
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  displayedColumns: string[] = ["pcid", "pcname", "action"];

  constructor(public service: ProjectClientEntityyyyyyyyyService) {}

  ngOnInit(): void {
    this.service
      .getProjectClientEntityyyyyyyyy()
      .subscribe((data: ProjectClientEntityyyyyyyyy[]) => {
        this.data = data;
        this.dataSource = new MatTableDataSource<ProjectClientEntityyyyyyyyy>(
          this.data
        );
        setTimeout(() => {
          this.dataSource.paginator = this.paginator;
        }, 0);
      });
  }

  delete(index: number, id: number) {
    const data = this.dataSource.data;
    data.splice(this.paginator.pageIndex * this.paginator.pageSize + index, 1);
    this.dataSource.data = data;
    this.service.deleteProjectClientEntityyyyyyyyy(id).subscribe();
  }
}
