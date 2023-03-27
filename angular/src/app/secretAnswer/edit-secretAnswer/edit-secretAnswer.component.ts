import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs";
import { SecretAnswer } from "../secretAnswer";
import { SecretAnswerService } from "../secretAnswer.service";

@Component({
  selector: "app-edit-secretAnswer",
  templateUrl: "./edit-secretAnswer.component.html",
  styleUrls: ["./edit-secretAnswer.component.css"],
})
export class EditSecretAnswerComponent implements OnInit {
  data!: SecretAnswer;
  id!: any;
  form!: FormGroup;
  private sub!: Subscription;

  constructor(
    public fb: FormBuilder,
    private _router: Router,
    public service: SecretAnswerService,
    private actRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    var id = this.actRoute.snapshot.params["id"];
    this.service.getSecretAnswerById(id).subscribe((data: SecretAnswer) => {
      this.data = data;
    });
    this.update();
  }

  update() {
    this.form = new FormGroup({
      QuestionId: new FormControl("", [Validators.required]),
      Answer: new FormControl("", [Validators.required]),
    });
  }

  edit() {
    if (this.form.valid) {
      var id = this.actRoute.snapshot.params["id"];
      this.service.editSecretAnswer(id, this.form.value).subscribe((res) => {
        this._router.navigate(["/list-secretAnswer/"]);
      });
    }
  }

  public handleError = (controlName: string, errorName: string) => {
    return this.form.controls[controlName].hasError(errorName);
  };
}
