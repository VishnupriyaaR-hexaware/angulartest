import { Component, ViewChild, OnInit } from "@angular/core";
import { SecretAnswerService } from "../secretAnswer.service";
import { SecretAnswer } from "../secretAnswer";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";

@Component({
  selector: "app-list-secretAnswer",
  templateUrl: "./list-secretAnswer.component.html",
  styleUrls: ["./list-secretAnswer.component.css"],
})
export class ListSecretAnswerComponent implements OnInit {
  data: SecretAnswer[] = [];
  dataSource = new MatTableDataSource<SecretAnswer>();
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  displayedColumns: string[] = ["QuestionId", "Answer", "action"];

  constructor(public service: SecretAnswerService) {}

  ngOnInit(): void {
    this.service.getSecretAnswer().subscribe((data: SecretAnswer[]) => {
      this.data = data;
      this.dataSource = new MatTableDataSource<SecretAnswer>(this.data);
      setTimeout(() => {
        this.dataSource.paginator = this.paginator;
      }, 0);
    });
  }

  delete(index: number, id: number) {
    const data = this.dataSource.data;
    data.splice(this.paginator.pageIndex * this.paginator.pageSize + index, 1);
    this.dataSource.data = data;
    this.service.deleteSecretAnswer(id).subscribe();
  }
}
