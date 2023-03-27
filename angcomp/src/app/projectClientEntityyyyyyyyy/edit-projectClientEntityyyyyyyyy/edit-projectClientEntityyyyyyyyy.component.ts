import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs";
import { ProjectClientEntityyyyyyyyy } from "../projectClientEntityyyyyyyyy";
import { ProjectClientEntityyyyyyyyyService } from "../projectClientEntityyyyyyyyy.service";

@Component({
  selector: "app-edit-projectClientEntityyyyyyyyy",
  templateUrl: "./edit-projectClientEntityyyyyyyyy.component.html",
  styleUrls: ["./edit-projectClientEntityyyyyyyyy.component.css"],
})
export class EditProjectClientEntityyyyyyyyyComponent implements OnInit {
  data!: ProjectClientEntityyyyyyyyy;
  id!: any;
  form!: FormGroup;
  private sub!: Subscription;

  constructor(
    public fb: FormBuilder,
    private _router: Router,
    public service: ProjectClientEntityyyyyyyyyService,
    private actRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    var id = this.actRoute.snapshot.params["id"];
    this.service
      .getProjectClientEntityyyyyyyyyById(id)
      .subscribe((data: ProjectClientEntityyyyyyyyy) => {
        this.data = data;
      });
    this.update();
  }

  update() {
    this.form = new FormGroup({
      pcid: new FormControl("", [Validators.required]),
      pcname: new FormControl("", [Validators.required]),
    });
  }

  edit() {
    if (this.form.valid) {
      var id = this.actRoute.snapshot.params["id"];
      this.service
        .editProjectClientEntityyyyyyyyy(id, this.form.value)
        .subscribe((res) => {
          this._router.navigate(["/list-projectClientEntityyyyyyyyy/"]);
        });
    }
  }

  public handleError = (controlName: string, errorName: string) => {
    return this.form.controls[controlName].hasError(errorName);
  };
}
