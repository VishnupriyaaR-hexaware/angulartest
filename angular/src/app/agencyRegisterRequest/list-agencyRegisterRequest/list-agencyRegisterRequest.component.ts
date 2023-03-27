import { Component, ViewChild, OnInit } from "@angular/core";
import { AgencyRegisterRequestService } from "../agencyRegisterRequest.service";
import { AgencyRegisterRequest } from "../agencyRegisterRequest";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";

@Component({
  selector: "app-list-agencyRegisterRequest",
  templateUrl: "./list-agencyRegisterRequest.component.html",
  styleUrls: ["./list-agencyRegisterRequest.component.css"],
})
export class ListAgencyRegisterRequestComponent implements OnInit {
  data: AgencyRegisterRequest[] = [];
  dataSource = new MatTableDataSource<AgencyRegisterRequest>();
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  displayedColumns: string[] = [
    "AgencyName",
    "FirstName",
    "LastName",
    "TaxId",
    "NPN",
    "WritingCode",
    "UserName",
    "Password",
    "SecretImage",
    "Email",
    "Phone",
    "HasAcceptedEula",
    "action",
  ];

  constructor(public service: AgencyRegisterRequestService) {}

  ngOnInit(): void {
    this.service
      .getAgencyRegisterRequest()
      .subscribe((data: AgencyRegisterRequest[]) => {
        this.data = data;
        this.dataSource = new MatTableDataSource<AgencyRegisterRequest>(
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
    this.service.deleteAgencyRegisterRequest(id).subscribe();
  }
}
