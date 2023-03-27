import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs";
import { AgencyValidateRequest } from "../agencyValidateRequest";
import { AgencyValidateRequestService } from "../agencyValidateRequest.service";

@Component({
  selector: "app-edit-agencyValidateRequest",
  templateUrl: "./edit-agencyValidateRequest.component.html",
  styleUrls: ["./edit-agencyValidateRequest.component.css"],
})
export class EditAgencyValidateRequestComponent implements OnInit {
  data!: AgencyValidateRequest;
  id!: any;
  form!: FormGroup;
  private sub!: Subscription;

  constructor(
    public fb: FormBuilder,
    private _router: Router,
    public service: AgencyValidateRequestService,
    private actRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    var id = this.actRoute.snapshot.params["id"];
    this.service
      .getAgencyValidateRequestById(id)
      .subscribe((data: AgencyValidateRequest) => {
        this.data = data;
      });
    this.update();
  }

  update() {
    this.form = new FormGroup({
      AgencyName: new FormControl("", [Validators.required]),
      FirstName: new FormControl("", [Validators.required]),
      LastName: new FormControl("", [Validators.required]),
      TaxId: new FormControl("", [Validators.required]),
      NPN: new FormControl("", [Validators.required]),
      WritingCode: new FormControl("", [Validators.required]),
    });
  }

  edit() {
    if (this.form.valid) {
      var id = this.actRoute.snapshot.params["id"];
      this.service
        .editAgencyValidateRequest(id, this.form.value)
        .subscribe((res) => {
          this._router.navigate(["/list-agencyValidateRequest/"]);
        });
    }
  }

  public handleError = (controlName: string, errorName: string) => {
    return this.form.controls[controlName].hasError(errorName);
  };
}
