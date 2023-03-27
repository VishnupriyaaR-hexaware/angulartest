import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";
import { of } from "rxjs";
import { AgencyRegisterRequestService } from "../agencyRegisterRequest.service";
import { AddAgencyRegisterRequestComponent } from "./add-agencyRegisterRequest.component";

describe("AddAgencyRegisterRequestComponent", () => {
  let mockrouter: any;
  let mockAgencyRegisterRequestService: any;
  let fixture: ComponentFixture<AddAgencyRegisterRequestComponent>;
  let component: AddAgencyRegisterRequestComponent;

  beforeEach(() => {
    mockAgencyRegisterRequestService = jasmine.createSpyObj([
      "addAgencyRegisterRequest",
    ]);
    mockrouter = jasmine.createSpyObj("Router", ["navigate"]);

    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AddAgencyRegisterRequestComponent],
      providers: [
        FormBuilder,
        {
          provide: AgencyRegisterRequestService,
          useValue: mockAgencyRegisterRequestService,
        },
        {
          provide: Router,
          useValue: mockrouter,
        },
      ],
    });

    fixture = TestBed.createComponent(AddAgencyRegisterRequestComponent);
    component = fixture.componentInstance;
  });

  describe("add", () => {
    beforeEach(() => {
      mockAgencyRegisterRequestService.addAgencyRegisterRequest.and.returnValue(
        of(true)
      );
      fixture.detectChanges();
    });

    it("should add AgencyRegisterRequest and navigate to list AgencyRegisterRequest", () => {
      component.form.setValue({
        AgencyName: "AgencyName",
        FirstName: "FirstName",
        LastName: "LastName",
        TaxId: "TaxId",
        NPN: "NPN",
        WritingCode: "WritingCode",
        UserName: "UserName",
        Password: "Password",
        SecretImage: "SecretImage",
        Email: "Email",
        Phone: "Phone",
        HasAcceptedEula: true,
      });
      component.add();
      mockrouter.navigate.and.returnValue(Promise.resolve(true));
      expect(mockrouter.navigate).toHaveBeenCalledWith([
        "/list-agencyRegisterRequest/",
      ]);
    });
  });
});
