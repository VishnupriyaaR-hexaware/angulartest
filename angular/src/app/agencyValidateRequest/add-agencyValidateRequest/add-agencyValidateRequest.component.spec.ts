import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";
import { of } from "rxjs";
import { AgencyValidateRequestService } from "../agencyValidateRequest.service";
import { AddAgencyValidateRequestComponent } from "./add-agencyValidateRequest.component";

describe("AddAgencyValidateRequestComponent", () => {
  let mockrouter: any;
  let mockAgencyValidateRequestService: any;
  let fixture: ComponentFixture<AddAgencyValidateRequestComponent>;
  let component: AddAgencyValidateRequestComponent;

  beforeEach(() => {
    mockAgencyValidateRequestService = jasmine.createSpyObj([
      "addAgencyValidateRequest",
    ]);
    mockrouter = jasmine.createSpyObj("Router", ["navigate"]);

    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AddAgencyValidateRequestComponent],
      providers: [
        FormBuilder,
        {
          provide: AgencyValidateRequestService,
          useValue: mockAgencyValidateRequestService,
        },
        {
          provide: Router,
          useValue: mockrouter,
        },
      ],
    });

    fixture = TestBed.createComponent(AddAgencyValidateRequestComponent);
    component = fixture.componentInstance;
  });

  describe("add", () => {
    beforeEach(() => {
      mockAgencyValidateRequestService.addAgencyValidateRequest.and.returnValue(
        of(true)
      );
      fixture.detectChanges();
    });

    it("should add AgencyValidateRequest and navigate to list AgencyValidateRequest", () => {
      component.form.setValue({
        AgencyName: "AgencyName",
        FirstName: "FirstName",
        LastName: "LastName",
        TaxId: "TaxId",
        NPN: "NPN",
        WritingCode: "WritingCode",
      });
      component.add();
      mockrouter.navigate.and.returnValue(Promise.resolve(true));
      expect(mockrouter.navigate).toHaveBeenCalledWith([
        "/list-agencyValidateRequest/",
      ]);
    });
  });
});
