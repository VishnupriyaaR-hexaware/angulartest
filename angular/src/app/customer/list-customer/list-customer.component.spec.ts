import { ComponentFixture, TestBed } from "@angular/core/testing";
import { of } from "rxjs";
import { CustomerService } from "../customer.service";
import { ListCustomerComponent } from "./list-customer.component";
import { Customer } from "../customer";

describe("ListCustomerComponent", () => {
  let mockpaginator: any;
  let mockdata: Customer[] = [];
  let mockCustomerService: any;
  let fixture: ComponentFixture<ListCustomerComponent>;
  let component: ListCustomerComponent;

  beforeEach(() => {
    mockdata = [
      {
        cid: "cid",
        cname: "cname",
      },
    ];

    mockCustomerService = jasmine.createSpyObj([
      "getCustomer",
      "deleteCustomer",
    ]);
    mockpaginator = jasmine.createSpyObj("MatPaginator", ["pageIndex"]);

    TestBed.configureTestingModule({
      declarations: [ListCustomerComponent],
      providers: [
        {
          provide: CustomerService,
          useValue: mockCustomerService,
        },
      ],
    });

    fixture = TestBed.createComponent(ListCustomerComponent);
    component = fixture.componentInstance;
  });

  it("should get all the Customers", async () => {
    mockCustomerService.getCustomer.and.returnValue(of(mockdata));
    fixture.detectChanges();
    expect(component.data).toBe(mockdata);
  });

  describe("delete", () => {
    beforeEach(() => {
      mockCustomerService.deleteCustomer.and.returnValue(of(true));
      component.dataSource.data = mockdata;
      component.paginator = mockpaginator;
    });

    it("should delete the Customer by id", () => {
      component.delete(0, 0);
      expect(component.data.length).toBe(0);
    });
  });
});
