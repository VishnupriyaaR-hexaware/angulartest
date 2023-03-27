import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs";
import { AgencyRegisterRequest } from "../agencyRegisterRequest";
import { AgencyRegisterRequestService } from "../agencyRegisterRequest.service";

@Component({
  selector: "app-edit-agencyRegisterRequest",
  templateUrl: "./edit-agencyRegisterRequest.component.html",
  styleUrls: ["./edit-agencyRegisterRequest.component.css"],
})
export class EditAgencyRegisterRequestComponent implements OnInit {
  data!: AgencyRegisterRequest;
  id!: any;
  form!: FormGroup;
  private sub!: Subscription;

  constructor(
    public fb: FormBuilder,
    private _router: Router,
    public service: AgencyRegisterRequestService,
    private actRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    var id = this.actRoute.snapshot.params["id"];
    this.service
      .getAgencyRegisterRequestById(id)
      .subscribe((data: AgencyRegisterRequest) => {
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
      UserName: new FormControl("", [Validators.required]),
      Password: new FormControl("", [Validators.required]),
      SecretImage: new FormControl("", [Validators.required]),
      Email: new FormControl("", [Validators.required]),
      Phone: new FormControl("", [Validators.required]),
      HasAcceptedEula: new FormControl("", [Validators.required]),
    });
  }

  edit() {
    if (this.form.valid) {
      var id = this.actRoute.snapshot.params["id"];
      this.service
        .editAgencyRegisterRequest(id, this.form.value)
        .subscribe((res) => {
          this._router.navigate(["/list-agencyRegisterRequest/"]);
        });
    }
  }

  public handleError = (controlName: string, errorName: string) => {
    return this.form.controls[controlName].hasError(errorName);
  };
}
