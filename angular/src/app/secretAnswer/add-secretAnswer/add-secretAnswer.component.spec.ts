import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";
import { of } from "rxjs";
import { SecretAnswerService } from "../secretAnswer.service";
import { AddSecretAnswerComponent } from "./add-secretAnswer.component";

describe("AddSecretAnswerComponent", () => {
  let mockrouter: any;
  let mockSecretAnswerService: any;
  let fixture: ComponentFixture<AddSecretAnswerComponent>;
  let component: AddSecretAnswerComponent;

  beforeEach(() => {
    mockSecretAnswerService = jasmine.createSpyObj(["addSecretAnswer"]);
    mockrouter = jasmine.createSpyObj("Router", ["navigate"]);

    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AddSecretAnswerComponent],
      providers: [
        FormBuilder,
        {
          provide: SecretAnswerService,
          useValue: mockSecretAnswerService,
        },
        {
          provide: Router,
          useValue: mockrouter,
        },
      ],
    });

    fixture = TestBed.createComponent(AddSecretAnswerComponent);
    component = fixture.componentInstance;
  });

  describe("add", () => {
    beforeEach(() => {
      mockSecretAnswerService.addSecretAnswer.and.returnValue(of(true));
      fixture.detectChanges();
    });

    it("should add SecretAnswer and navigate to list SecretAnswer", () => {
      component.form.setValue({
        QuestionId: 43,
        Answer: "Answer",
      });
      component.add();
      mockrouter.navigate.and.returnValue(Promise.resolve(true));
      expect(mockrouter.navigate).toHaveBeenCalledWith(["/list-secretAnswer/"]);
    });
  });
});
