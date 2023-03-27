import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FormBuilder } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";
import { of } from "rxjs";
import { Customer } from "../customer";
import { CustomerService } from "../customer.service";
import { EditCustomerComponent } from "./edit-customer.component";

describe("EditCustomerComponent", () => {
  let mockrouter: any;
  let mockActivatedRoute: any;
  let mockdata: Customer;
  let mockCustomerService: any;
  let component: EditCustomerComponent;
  let fixture: ComponentFixture<EditCustomerComponent>;

  beforeEach(() => {
    mockdata = {
      cid: "cid",
      cname: "cname",
    };

    mockCustomerService = jasmine.createSpyObj([
      "getCustomerById",
      "editCustomer",
    ]);
    mockrouter = jasmine.createSpyObj("Router", ["navigate"]);

    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [EditCustomerComponent],
      providers: [
        FormBuilder,
        { provide: CustomerService, useValue: mockCustomerService },
        {
          provide: ActivatedRoute,
          useValue: (mockActivatedRoute = {
            snapshot: { params: { id: "1" } },
          }),
        },
        { provide: Router, useValue: mockrouter },
      ],
    });
    fixture = TestBed.createComponent(EditCustomerComponent);
    component = fixture.componentInstance;
  });

  it("should get the Customer by id", () => {
    component.id = mockActivatedRoute.snapshot.params["id"];
    mockCustomerService.getCustomerById.and.returnValue(of(mockdata));
    fixture.detectChanges();
    expect(component.data).toEqual(mockdata);
  });

  describe("edit", () => {
    beforeEach(() => {
      component.id = mockActivatedRoute.snapshot.params["id"];
      mockCustomerService.getCustomerById.and.returnValue(of(mockdata));
      mockCustomerService.editCustomer.and.returnValue(of(true));
      fixture.detectChanges();
    });

    it("should edit the Customer by id", () => {
      component.id = mockActivatedRoute.snapshot.params["id"];
      component.form.setValue({
        cid: "cid",
        cname: "cname",
      });
      component.edit();
      mockrouter.navigate.and.returnValue(Promise.resolve(true));
      expect(mockrouter.navigate).toHaveBeenCalledWith(["/list-customer/"]);
    });
  });
});
