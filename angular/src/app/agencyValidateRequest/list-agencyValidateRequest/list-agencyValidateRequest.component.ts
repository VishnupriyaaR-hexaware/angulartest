import { Component, ViewChild, OnInit } from "@angular/core";
import { AgencyValidateRequestService } from "../agencyValidateRequest.service";
import { AgencyValidateRequest } from "../agencyValidateRequest";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";

@Component({
  selector: "app-list-agencyValidateRequest",
  templateUrl: "./list-agencyValidateRequest.component.html",
  styleUrls: ["./list-agencyValidateRequest.component.css"],
})
export class ListAgencyValidateRequestComponent implements OnInit {
  data: AgencyValidateRequest[] = [];
  dataSource = new MatTableDataSource<AgencyValidateRequest>();
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  displayedColumns: string[] = [
    "AgencyName",
    "FirstName",
    "LastName",
    "TaxId",
    "NPN",
    "WritingCode",
    "action",
  ];

  constructor(public service: AgencyValidateRequestService) {}

  ngOnInit(): void {
    this.service
      .getAgencyValidateRequest()
      .subscribe((data: AgencyValidateRequest[]) => {
        this.data = data;
        this.dataSource = new MatTableDataSource<AgencyValidateRequest>(
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
    this.service.deleteAgencyValidateRequest(id).subscribe();
  }
}
