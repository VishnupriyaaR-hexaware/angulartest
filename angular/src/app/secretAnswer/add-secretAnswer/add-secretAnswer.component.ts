import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { SecretAnswerService } from "../secretAnswer.service";

@Component({
  selector: "app-add-secretAnswer",
  templateUrl: "./add-secretAnswer.component.html",
  styleUrls: ["./add-secretAnswer.component.css"],
})
export class AddSecretAnswerComponent implements OnInit {
  form!: FormGroup;

  constructor(
    public fb: FormBuilder,
    private _router: Router,
    public service: SecretAnswerService
  ) {}

  ngOnInit(): void {
    this.submit();
  }

  submit() {
    this.form = this.fb.group({
      QuestionId: ["", [Validators.required]],
      Answer: ["", [Validators.required]],
    });
  }

  add() {
    if (this.form.valid) {
      this.service.addSecretAnswer(this.form.value).subscribe((res) => {
        this._router.navigate(["/list-secretAnswer/"]);
      });
    }
  }

  public handleError = (controlName: string, errorName: string) => {
    return this.form.controls[controlName].hasError(errorName);
  };
}
