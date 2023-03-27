import { Component, ViewChild, OnInit } from "@angular/core";
import { CustomerService } from "../customer.service";
import { Customer } from "../customer";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";

@Component({
  selector: "app-list-customer",
  templateUrl: "./list-customer.component.html",
  styleUrls: ["./list-customer.component.css"],
})
export class ListCustomerComponent implements OnInit {
  data: Customer[] = [];
  dataSource = new MatTableDataSource<Customer>();
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  displayedColumns: string[] = ["cid", "cname", "action"];

  constructor(public service: CustomerService) {}

  ngOnInit(): void {
    this.service.getCustomer().subscribe((data: Customer[]) => {
      this.data = data;
      this.dataSource = new MatTableDataSource<Customer>(this.data);
      setTimeout(() => {
        this.dataSource.paginator = this.paginator;
      }, 0);
    });
  }

  delete(index: number, id: number) {
    const data = this.dataSource.data;
    data.splice(this.paginator.pageIndex * this.paginator.pageSize + index, 1);
    this.dataSource.data = data;
    this.service.deleteCustomer(id).subscribe();
  }
}
