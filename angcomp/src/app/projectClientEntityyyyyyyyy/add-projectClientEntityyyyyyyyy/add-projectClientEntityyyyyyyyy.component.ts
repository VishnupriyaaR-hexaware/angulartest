import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ProjectClientEntityyyyyyyyyService } from "../projectClientEntityyyyyyyyy.service";

@Component({
  selector: "app-add-projectClientEntityyyyyyyyy",
  templateUrl: "./add-projectClientEntityyyyyyyyy.component.html",
  styleUrls: ["./add-projectClientEntityyyyyyyyy.component.css"],
})
export class AddProjectClientEntityyyyyyyyyComponent implements OnInit {
  form!: FormGroup;

  constructor(
    public fb: FormBuilder,
    private _router: Router,
    public service: ProjectClientEntityyyyyyyyyService
  ) {}

  ngOnInit(): void {
    this.submit();
  }

  submit() {
    this.form = this.fb.group({
      pcid: ["", [Validators.required]],
      pcname: ["", [Validators.required]],
    });
  }

  add() {
    if (this.form.valid) {
      this.service
        .addProjectClientEntityyyyyyyyy(this.form.value)
        .subscribe((res) => {
          this._router.navigate(["/list-projectClientEntityyyyyyyyy/"]);
        });
    }
  }

  public handleError = (controlName: string, errorName: string) => {
    return this.form.controls[controlName].hasError(errorName);
  };
}
