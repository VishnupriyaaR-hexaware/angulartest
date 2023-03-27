import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";
import { of } from "rxjs";
import { CustomerService } from "../customer.service";
import { AddCustomerComponent } from "./add-customer.component";

describe("AddCustomerComponent", () => {
  let mockrouter: any;
  let mockCustomerService: any;
  let fixture: ComponentFixture<AddCustomerComponent>;
  let component: AddCustomerComponent;

  beforeEach(() => {
    mockCustomerService = jasmine.createSpyObj(["addCustomer"]);
    mockrouter = jasmine.createSpyObj("Router", ["navigate"]);

    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AddCustomerComponent],
      providers: [
        FormBuilder,
        {
          provide: CustomerService,
          useValue: mockCustomerService,
        },
        {
          provide: Router,
          useValue: mockrouter,
        },
      ],
    });

    fixture = TestBed.createComponent(AddCustomerComponent);
    component = fixture.componentInstance;
  });

  describe("add", () => {
    beforeEach(() => {
      mockCustomerService.addCustomer.and.returnValue(of(true));
      fixture.detectChanges();
    });

    it("should add Customer and navigate to list Customer", () => {
      component.form.setValue({
        cid: "cid",
        cname: "cname",
      });
      component.add();
      mockrouter.navigate.and.returnValue(Promise.resolve(true));
      expect(mockrouter.navigate).toHaveBeenCalledWith(["/list-customer/"]);
    });
  });
});
