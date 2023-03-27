import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs";
import { Customer } from "../customer";
import { CustomerService } from "../customer.service";

@Component({
  selector: "app-edit-customer",
  templateUrl: "./edit-customer.component.html",
  styleUrls: ["./edit-customer.component.css"],
})
export class EditCustomerComponent implements OnInit {
  data!: Customer;
  id!: any;
  form!: FormGroup;
  private sub!: Subscription;

  constructor(
    public fb: FormBuilder,
    private _router: Router,
    public service: CustomerService,
    private actRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    var id = this.actRoute.snapshot.params["id"];
    this.service.getCustomerById(id).subscribe((data: Customer) => {
      this.data = data;
    });
    this.update();
  }

  update() {
    this.form = new FormGroup({
      cid: new FormControl("", [Validators.required]),
      cname: new FormControl("", [Validators.required]),
    });
  }

  edit() {
    if (this.form.valid) {
      var id = this.actRoute.snapshot.params["id"];
      this.service.editCustomer(id, this.form.value).subscribe((res) => {
        this._router.navigate(["/list-customer/"]);
      });
    }
  }

  public handleError = (controlName: string, errorName: string) => {
    return this.form.controls[controlName].hasError(errorName);
  };
}
