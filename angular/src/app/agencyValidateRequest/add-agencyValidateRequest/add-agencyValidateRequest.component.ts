import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AgencyValidateRequestService } from "../agencyValidateRequest.service";

@Component({
  selector: "app-add-agencyValidateRequest",
  templateUrl: "./add-agencyValidateRequest.component.html",
  styleUrls: ["./add-agencyValidateRequest.component.css"],
})
export class AddAgencyValidateRequestComponent implements OnInit {
  form!: FormGroup;

  constructor(
    public fb: FormBuilder,
    private _router: Router,
    public service: AgencyValidateRequestService
  ) {}

  ngOnInit(): void {
    this.submit();
  }

  submit() {
    this.form = this.fb.group({
      AgencyName: ["", [Validators.required]],
      FirstName: ["", [Validators.required]],
      LastName: ["", [Validators.required]],
      TaxId: ["", [Validators.required]],
      NPN: ["", [Validators.required]],
      WritingCode: ["", [Validators.required]],
    });
  }

  add() {
    if (this.form.valid) {
      this.service
        .addAgencyValidateRequest(this.form.value)
        .subscribe((res) => {
          this._router.navigate(["/list-agencyValidateRequest/"]);
        });
    }
  }

  public handleError = (controlName: string, errorName: string) => {
    return this.form.controls[controlName].hasError(errorName);
  };
}
