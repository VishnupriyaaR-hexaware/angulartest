import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FormBuilder } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";
import { of } from "rxjs";
import { AgencyRegisterRequest } from "../agencyRegisterRequest";
import { AgencyRegisterRequestService } from "../agencyRegisterRequest.service";
import { EditAgencyRegisterRequestComponent } from "./edit-agencyRegisterRequest.component";

describe("EditAgencyRegisterRequestComponent", () => {
  let mockrouter: any;
  let mockActivatedRoute: any;
  let mockdata: AgencyRegisterRequest;
  let mockAgencyRegisterRequestService: any;
  let component: EditAgencyRegisterRequestComponent;
  let fixture: ComponentFixture<EditAgencyRegisterRequestComponent>;

  beforeEach(() => {
    mockdata = {
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
    };

    mockAgencyRegisterRequestService = jasmine.createSpyObj([
      "getAgencyRegisterRequestById",
      "editAgencyRegisterRequest",
    ]);
    mockrouter = jasmine.createSpyObj("Router", ["navigate"]);

    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [EditAgencyRegisterRequestComponent],
      providers: [
        FormBuilder,
        {
          provide: AgencyRegisterRequestService,
          useValue: mockAgencyRegisterRequestService,
        },
        {
          provide: ActivatedRoute,
          useValue: (mockActivatedRoute = {
            snapshot: { params: { id: "1" } },
          }),
        },
        { provide: Router, useValue: mockrouter },
      ],
    });
    fixture = TestBed.createComponent(EditAgencyRegisterRequestComponent);
    component = fixture.componentInstance;
  });

  it("should get the AgencyRegisterRequest by id", () => {
    component.id = mockActivatedRoute.snapshot.params["id"];
    mockAgencyRegisterRequestService.getAgencyRegisterRequestById.and.returnValue(
      of(mockdata)
    );
    fixture.detectChanges();
    expect(component.data).toEqual(mockdata);
  });

  describe("edit", () => {
    beforeEach(() => {
      component.id = mockActivatedRoute.snapshot.params["id"];
      mockAgencyRegisterRequestService.getAgencyRegisterRequestById.and.returnValue(
        of(mockdata)
      );
      mockAgencyRegisterRequestService.editAgencyRegisterRequest.and.returnValue(
        of(true)
      );
      fixture.detectChanges();
    });

    it("should edit the AgencyRegisterRequest by id", () => {
      component.id = mockActivatedRoute.snapshot.params["id"];
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
      component.edit();
      mockrouter.navigate.and.returnValue(Promise.resolve(true));
      expect(mockrouter.navigate).toHaveBeenCalledWith([
        "/list-agencyRegisterRequest/",
      ]);
    });
  });
});
