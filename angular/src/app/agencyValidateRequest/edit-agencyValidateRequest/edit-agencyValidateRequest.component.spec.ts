import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FormBuilder } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";
import { of } from "rxjs";
import { AgencyValidateRequest } from "../agencyValidateRequest";
import { AgencyValidateRequestService } from "../agencyValidateRequest.service";
import { EditAgencyValidateRequestComponent } from "./edit-agencyValidateRequest.component";

describe("EditAgencyValidateRequestComponent", () => {
  let mockrouter: any;
  let mockActivatedRoute: any;
  let mockdata: AgencyValidateRequest;
  let mockAgencyValidateRequestService: any;
  let component: EditAgencyValidateRequestComponent;
  let fixture: ComponentFixture<EditAgencyValidateRequestComponent>;

  beforeEach(() => {
    mockdata = {
      AgencyName: "AgencyName",
      FirstName: "FirstName",
      LastName: "LastName",
      TaxId: "TaxId",
      NPN: "NPN",
      WritingCode: "WritingCode",
    };

    mockAgencyValidateRequestService = jasmine.createSpyObj([
      "getAgencyValidateRequestById",
      "editAgencyValidateRequest",
    ]);
    mockrouter = jasmine.createSpyObj("Router", ["navigate"]);

    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [EditAgencyValidateRequestComponent],
      providers: [
        FormBuilder,
        {
          provide: AgencyValidateRequestService,
          useValue: mockAgencyValidateRequestService,
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
    fixture = TestBed.createComponent(EditAgencyValidateRequestComponent);
    component = fixture.componentInstance;
  });

  it("should get the AgencyValidateRequest by id", () => {
    component.id = mockActivatedRoute.snapshot.params["id"];
    mockAgencyValidateRequestService.getAgencyValidateRequestById.and.returnValue(
      of(mockdata)
    );
    fixture.detectChanges();
    expect(component.data).toEqual(mockdata);
  });

  describe("edit", () => {
    beforeEach(() => {
      component.id = mockActivatedRoute.snapshot.params["id"];
      mockAgencyValidateRequestService.getAgencyValidateRequestById.and.returnValue(
        of(mockdata)
      );
      mockAgencyValidateRequestService.editAgencyValidateRequest.and.returnValue(
        of(true)
      );
      fixture.detectChanges();
    });

    it("should edit the AgencyValidateRequest by id", () => {
      component.id = mockActivatedRoute.snapshot.params["id"];
      component.form.setValue({
        AgencyName: "AgencyName",
        FirstName: "FirstName",
        LastName: "LastName",
        TaxId: "TaxId",
        NPN: "NPN",
        WritingCode: "WritingCode",
      });
      component.edit();
      mockrouter.navigate.and.returnValue(Promise.resolve(true));
      expect(mockrouter.navigate).toHaveBeenCalledWith([
        "/list-agencyValidateRequest/",
      ]);
    });
  });
});
