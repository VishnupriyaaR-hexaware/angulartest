import { ComponentFixture, TestBed } from "@angular/core/testing";
import { of } from "rxjs";
import { AgencyRegisterRequestService } from "../agencyRegisterRequest.service";
import { ListAgencyRegisterRequestComponent } from "./list-agencyRegisterRequest.component";
import { AgencyRegisterRequest } from "../agencyRegisterRequest";

describe("ListAgencyRegisterRequestComponent", () => {
  let mockpaginator: any;
  let mockdata: AgencyRegisterRequest[] = [];
  let mockAgencyRegisterRequestService: any;
  let fixture: ComponentFixture<ListAgencyRegisterRequestComponent>;
  let component: ListAgencyRegisterRequestComponent;

  beforeEach(() => {
    mockdata = [
      {
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
        HasAcceptedEula: false,
      },
    ];

    mockAgencyRegisterRequestService = jasmine.createSpyObj([
      "getAgencyRegisterRequest",
      "deleteAgencyRegisterRequest",
    ]);
    mockpaginator = jasmine.createSpyObj("MatPaginator", ["pageIndex"]);

    TestBed.configureTestingModule({
      declarations: [ListAgencyRegisterRequestComponent],
      providers: [
        {
          provide: AgencyRegisterRequestService,
          useValue: mockAgencyRegisterRequestService,
        },
      ],
    });

    fixture = TestBed.createComponent(ListAgencyRegisterRequestComponent);
    component = fixture.componentInstance;
  });

  it("should get all the AgencyRegisterRequests", async () => {
    mockAgencyRegisterRequestService.getAgencyRegisterRequest.and.returnValue(
      of(mockdata)
    );
    fixture.detectChanges();
    expect(component.data).toBe(mockdata);
  });

  describe("delete", () => {
    beforeEach(() => {
      mockAgencyRegisterRequestService.deleteAgencyRegisterRequest.and.returnValue(
        of(true)
      );
      component.dataSource.data = mockdata;
      component.paginator = mockpaginator;
    });

    it("should delete the AgencyRegisterRequest by id", () => {
      component.delete(0, 0);
      expect(component.data.length).toBe(0);
    });
  });
});
