import { Component, ViewChild, OnInit } from "@angular/core";
import { ProductUserEntityyyyyyyyyyyService } from "../productUserEntityyyyyyyyyyy.service";
import { ProductUserEntityyyyyyyyyyy } from "../productUserEntityyyyyyyyyyy";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";

@Component({
  selector: "app-list-productUserEntityyyyyyyyyyy",
  templateUrl: "./list-productUserEntityyyyyyyyyyy.component.html",
  styleUrls: ["./list-productUserEntityyyyyyyyyyy.component.css"],
})
export class ListProductUserEntityyyyyyyyyyyComponent implements OnInit {
  data: ProductUserEntityyyyyyyyyyy[] = [];
  dataSource = new MatTableDataSource<ProductUserEntityyyyyyyyyyy>();
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  displayedColumns: string[] = ["puid", "puname", "action"];

  constructor(public service: ProductUserEntityyyyyyyyyyyService) {}

  ngOnInit(): void {
    this.service
      .getProductUserEntityyyyyyyyyyy()
      .subscribe((data: ProductUserEntityyyyyyyyyyy[]) => {
        this.data = data;
        this.dataSource = new MatTableDataSource<ProductUserEntityyyyyyyyyyy>(
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
    this.service.deleteProductUserEntityyyyyyyyyyy(id).subscribe();
  }
}
