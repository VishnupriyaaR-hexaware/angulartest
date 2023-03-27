import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AgencyRegisterRequestService } from "../agencyRegisterRequest.service";

@Component({
  selector: "app-add-agencyRegisterRequest",
  templateUrl: "./add-agencyRegisterRequest.component.html",
  styleUrls: ["./add-agencyRegisterRequest.component.css"],
})
export class AddAgencyRegisterRequestComponent implements OnInit {
  form!: FormGroup;

  constructor(
    public fb: FormBuilder,
    private _router: Router,
    public service: AgencyRegisterRequestService
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
      UserName: ["", [Validators.required]],
      Password: ["", [Validators.required]],
      SecretImage: ["", [Validators.required]],
      Email: ["", [Validators.required]],
      Phone: ["", [Validators.required]],
      HasAcceptedEula: ["", [Validators.required]],
    });
  }

  add() {
    if (this.form.valid) {
      this.service
        .addAgencyRegisterRequest(this.form.value)
        .subscribe((res) => {
          this._router.navigate(["/list-agencyRegisterRequest/"]);
        });
    }
  }

  public handleError = (controlName: string, errorName: string) => {
    return this.form.controls[controlName].hasError(errorName);
  };
}
