import { ComponentFixture, TestBed } from "@angular/core/testing";
import { of } from "rxjs";
import { AgencyValidateRequestService } from "../agencyValidateRequest.service";
import { ListAgencyValidateRequestComponent } from "./list-agencyValidateRequest.component";
import { AgencyValidateRequest } from "../agencyValidateRequest";

describe("ListAgencyValidateRequestComponent", () => {
  let mockpaginator: any;
  let mockdata: AgencyValidateRequest[] = [];
  let mockAgencyValidateRequestService: any;
  let fixture: ComponentFixture<ListAgencyValidateRequestComponent>;
  let component: ListAgencyValidateRequestComponent;

  beforeEach(() => {
    mockdata = [
      {
        AgencyName: "AgencyName",
        FirstName: "FirstName",
        LastName: "LastName",
        TaxId: "TaxId",
        NPN: "NPN",
        WritingCode: "WritingCode",
      },
    ];

    mockAgencyValidateRequestService = jasmine.createSpyObj([
      "getAgencyValidateRequest",
      "deleteAgencyValidateRequest",
    ]);
    mockpaginator = jasmine.createSpyObj("MatPaginator", ["pageIndex"]);

    TestBed.configureTestingModule({
      declarations: [ListAgencyValidateRequestComponent],
      providers: [
        {
          provide: AgencyValidateRequestService,
          useValue: mockAgencyValidateRequestService,
        },
      ],
    });

    fixture = TestBed.createComponent(ListAgencyValidateRequestComponent);
    component = fixture.componentInstance;
  });

  it("should get all the AgencyValidateRequests", async () => {
    mockAgencyValidateRequestService.getAgencyValidateRequest.and.returnValue(
      of(mockdata)
    );
    fixture.detectChanges();
    expect(component.data).toBe(mockdata);
  });

  describe("delete", () => {
    beforeEach(() => {
      mockAgencyValidateRequestService.deleteAgencyValidateRequest.and.returnValue(
        of(true)
      );
      component.dataSource.data = mockdata;
      component.paginator = mockpaginator;
    });

    it("should delete the AgencyValidateRequest by id", () => {
      component.delete(0, 0);
      expect(component.data.length).toBe(0);
    });
  });
});
