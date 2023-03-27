import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FormBuilder } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";
import { of } from "rxjs";
import { ProductUserEntityyyyyyyyyyy } from "../productUserEntityyyyyyyyyyy";
import { ProductUserEntityyyyyyyyyyyService } from "../productUserEntityyyyyyyyyyy.service";
import { EditProductUserEntityyyyyyyyyyyComponent } from "./edit-productUserEntityyyyyyyyyyy.component";

describe("EditProductUserEntityyyyyyyyyyyComponent", () => {
  let mockrouter: any;
  let mockActivatedRoute: any;
  let mockdata: ProductUserEntityyyyyyyyyyy;
  let mockProductUserEntityyyyyyyyyyyService: any;
  let component: EditProductUserEntityyyyyyyyyyyComponent;
  let fixture: ComponentFixture<EditProductUserEntityyyyyyyyyyyComponent>;

  beforeEach(() => {
    mockdata = {
      puid: "puid",
      puname: "puname",
    };

    mockProductUserEntityyyyyyyyyyyService = jasmine.createSpyObj([
      "getProductUserEntityyyyyyyyyyyById",
      "editProductUserEntityyyyyyyyyyy",
    ]);
    mockrouter = jasmine.createSpyObj("Router", ["navigate"]);

    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [EditProductUserEntityyyyyyyyyyyComponent],
      providers: [
        FormBuilder,
        {
          provide: ProductUserEntityyyyyyyyyyyService,
          useValue: mockProductUserEntityyyyyyyyyyyService,
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
    fixture = TestBed.createComponent(EditProductUserEntityyyyyyyyyyyComponent);
    component = fixture.componentInstance;
  });

  it("should get the ProductUserEntityyyyyyyyyyy by id", () => {
    component.id = mockActivatedRoute.snapshot.params["id"];
    mockProductUserEntityyyyyyyyyyyService.getProductUserEntityyyyyyyyyyyById.and.returnValue(
      of(mockdata)
    );
    fixture.detectChanges();
    expect(component.data).toEqual(mockdata);
  });

  describe("edit", () => {
    beforeEach(() => {
      component.id = mockActivatedRoute.snapshot.params["id"];
      mockProductUserEntityyyyyyyyyyyService.getProductUserEntityyyyyyyyyyyById.and.returnValue(
        of(mockdata)
      );
      mockProductUserEntityyyyyyyyyyyService.editProductUserEntityyyyyyyyyyy.and.returnValue(
        of(true)
      );
      fixture.detectChanges();
    });

    it("should edit the ProductUserEntityyyyyyyyyyy by id", () => {
      component.id = mockActivatedRoute.snapshot.params["id"];
      component.form.setValue({
        puid: "puid",
        puname: "puname",
      });
      component.edit();
      mockrouter.navigate.and.returnValue(Promise.resolve(true));
      expect(mockrouter.navigate).toHaveBeenCalledWith([
        "/list-productUserEntityyyyyyyyyyy/",
      ]);
    });
  });
});
