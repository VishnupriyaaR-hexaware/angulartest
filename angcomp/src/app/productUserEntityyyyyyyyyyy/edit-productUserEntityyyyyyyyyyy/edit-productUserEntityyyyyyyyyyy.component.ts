import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs";
import { ProductUserEntityyyyyyyyyyy } from "../productUserEntityyyyyyyyyyy";
import { ProductUserEntityyyyyyyyyyyService } from "../productUserEntityyyyyyyyyyy.service";

@Component({
  selector: "app-edit-productUserEntityyyyyyyyyyy",
  templateUrl: "./edit-productUserEntityyyyyyyyyyy.component.html",
  styleUrls: ["./edit-productUserEntityyyyyyyyyyy.component.css"],
})
export class EditProductUserEntityyyyyyyyyyyComponent implements OnInit {
  data!: ProductUserEntityyyyyyyyyyy;
  id!: any;
  form!: FormGroup;
  private sub!: Subscription;

  constructor(
    public fb: FormBuilder,
    private _router: Router,
    public service: ProductUserEntityyyyyyyyyyyService,
    private actRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    var id = this.actRoute.snapshot.params["id"];
    this.service
      .getProductUserEntityyyyyyyyyyyById(id)
      .subscribe((data: ProductUserEntityyyyyyyyyyy) => {
        this.data = data;
      });
    this.update();
  }

  update() {
    this.form = new FormGroup({
      puid: new FormControl("", [Validators.required]),
      puname: new FormControl("", [Validators.required]),
    });
  }

  edit() {
    if (this.form.valid) {
      var id = this.actRoute.snapshot.params["id"];
      this.service
        .editProductUserEntityyyyyyyyyyy(id, this.form.value)
        .subscribe((res) => {
          this._router.navigate(["/list-productUserEntityyyyyyyyyyy/"]);
        });
    }
  }

  public handleError = (controlName: string, errorName: string) => {
    return this.form.controls[controlName].hasError(errorName);
  };
}
