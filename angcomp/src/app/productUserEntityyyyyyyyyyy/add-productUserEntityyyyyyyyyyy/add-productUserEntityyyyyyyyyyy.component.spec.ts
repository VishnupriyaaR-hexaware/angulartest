import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";
import { of } from "rxjs";
import { ProductUserEntityyyyyyyyyyyService } from "../productUserEntityyyyyyyyyyy.service";
import { AddProductUserEntityyyyyyyyyyyComponent } from "./add-productUserEntityyyyyyyyyyy.component";

describe("AddProductUserEntityyyyyyyyyyyComponent", () => {
  let mockrouter: any;
  let mockProductUserEntityyyyyyyyyyyService: any;
  let fixture: ComponentFixture<AddProductUserEntityyyyyyyyyyyComponent>;
  let component: AddProductUserEntityyyyyyyyyyyComponent;

  beforeEach(() => {
    mockProductUserEntityyyyyyyyyyyService = jasmine.createSpyObj([
      "addProductUserEntityyyyyyyyyyy",
    ]);
    mockrouter = jasmine.createSpyObj("Router", ["navigate"]);

    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AddProductUserEntityyyyyyyyyyyComponent],
      providers: [
        FormBuilder,
        {
          provide: ProductUserEntityyyyyyyyyyyService,
          useValue: mockProductUserEntityyyyyyyyyyyService,
        },
        {
          provide: Router,
          useValue: mockrouter,
        },
      ],
    });

    fixture = TestBed.createComponent(AddProductUserEntityyyyyyyyyyyComponent);
    component = fixture.componentInstance;
  });

  describe("add", () => {
    beforeEach(() => {
      mockProductUserEntityyyyyyyyyyyService.addProductUserEntityyyyyyyyyyy.and.returnValue(
        of(true)
      );
      fixture.detectChanges();
    });

    it("should add ProductUserEntityyyyyyyyyyy and navigate to list ProductUserEntityyyyyyyyyyy", () => {
      component.form.setValue({
        puid: "puid",
        puname: "puname",
      });
      component.add();
      mockrouter.navigate.and.returnValue(Promise.resolve(true));
      expect(mockrouter.navigate).toHaveBeenCalledWith([
        "/list-productUserEntityyyyyyyyyyy/",
      ]);
    });
  });
});
