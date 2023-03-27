import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FormBuilder } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";
import { of } from "rxjs";
import { SecretAnswer } from "../secretAnswer";
import { SecretAnswerService } from "../secretAnswer.service";
import { EditSecretAnswerComponent } from "./edit-secretAnswer.component";

describe("EditSecretAnswerComponent", () => {
  let mockrouter: any;
  let mockActivatedRoute: any;
  let mockdata: SecretAnswer;
  let mockSecretAnswerService: any;
  let component: EditSecretAnswerComponent;
  let fixture: ComponentFixture<EditSecretAnswerComponent>;

  beforeEach(() => {
    mockdata = {
      QuestionId: 67,
      Answer: "Answer",
    };

    mockSecretAnswerService = jasmine.createSpyObj([
      "getSecretAnswerById",
      "editSecretAnswer",
    ]);
    mockrouter = jasmine.createSpyObj("Router", ["navigate"]);

    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [EditSecretAnswerComponent],
      providers: [
        FormBuilder,
        { provide: SecretAnswerService, useValue: mockSecretAnswerService },
        {
          provide: ActivatedRoute,
          useValue: (mockActivatedRoute = {
            snapshot: { params: { id: "1" } },
          }),
        },
        { provide: Router, useValue: mockrouter },
      ],
    });
    fixture = TestBed.createComponent(EditSecretAnswerComponent);
    component = fixture.componentInstance;
  });

  it("should get the SecretAnswer by id", () => {
    component.id = mockActivatedRoute.snapshot.params["id"];
    mockSecretAnswerService.getSecretAnswerById.and.returnValue(of(mockdata));
    fixture.detectChanges();
    expect(component.data).toEqual(mockdata);
  });

  describe("edit", () => {
    beforeEach(() => {
      component.id = mockActivatedRoute.snapshot.params["id"];
      mockSecretAnswerService.getSecretAnswerById.and.returnValue(of(mockdata));
      mockSecretAnswerService.editSecretAnswer.and.returnValue(of(true));
      fixture.detectChanges();
    });

    it("should edit the SecretAnswer by id", () => {
      component.id = mockActivatedRoute.snapshot.params["id"];
      component.form.setValue({
        QuestionId: 48,
        Answer: "Answer",
      });
      component.edit();
      mockrouter.navigate.and.returnValue(Promise.resolve(true));
      expect(mockrouter.navigate).toHaveBeenCalledWith(["/list-secretAnswer/"]);
    });
  });
});
