import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ProductUserEntityyyyyyyyyyyService } from "../productUserEntityyyyyyyyyyy.service";

@Component({
  selector: "app-add-productUserEntityyyyyyyyyyy",
  templateUrl: "./add-productUserEntityyyyyyyyyyy.component.html",
  styleUrls: ["./add-productUserEntityyyyyyyyyyy.component.css"],
})
export class AddProductUserEntityyyyyyyyyyyComponent implements OnInit {
  form!: FormGroup;

  constructor(
    public fb: FormBuilder,
    private _router: Router,
    public service: ProductUserEntityyyyyyyyyyyService
  ) {}

  ngOnInit(): void {
    this.submit();
  }

  submit() {
    this.form = this.fb.group({
      puid: ["", [Validators.required]],
      puname: ["", [Validators.required]],
    });
  }

  add() {
    if (this.form.valid) {
      this.service
        .addProductUserEntityyyyyyyyyyy(this.form.value)
        .subscribe((res) => {
          this._router.navigate(["/list-productUserEntityyyyyyyyyyy/"]);
        });
    }
  }

  public handleError = (controlName: string, errorName: string) => {
    return this.form.controls[controlName].hasError(errorName);
  };
}
