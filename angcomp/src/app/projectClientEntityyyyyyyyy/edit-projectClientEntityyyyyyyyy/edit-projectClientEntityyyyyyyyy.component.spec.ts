import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FormBuilder } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";
import { of } from "rxjs";
import { ProjectClientEntityyyyyyyyy } from "../projectClientEntityyyyyyyyy";
import { ProjectClientEntityyyyyyyyyService } from "../projectClientEntityyyyyyyyy.service";
import { EditProjectClientEntityyyyyyyyyComponent } from "./edit-projectClientEntityyyyyyyyy.component";

describe("EditProjectClientEntityyyyyyyyyComponent", () => {
  let mockrouter: any;
  let mockActivatedRoute: any;
  let mockdata: ProjectClientEntityyyyyyyyy;
  let mockProjectClientEntityyyyyyyyyService: any;
  let component: EditProjectClientEntityyyyyyyyyComponent;
  let fixture: ComponentFixture<EditProjectClientEntityyyyyyyyyComponent>;

  beforeEach(() => {
    mockdata = {
      pcid: "pcid",
      pcname: "pcname",
    };

    mockProjectClientEntityyyyyyyyyService = jasmine.createSpyObj([
      "getProjectClientEntityyyyyyyyyById",
      "editProjectClientEntityyyyyyyyy",
    ]);
    mockrouter = jasmine.createSpyObj("Router", ["navigate"]);

    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [EditProjectClientEntityyyyyyyyyComponent],
      providers: [
        FormBuilder,
        {
          provide: ProjectClientEntityyyyyyyyyService,
          useValue: mockProjectClientEntityyyyyyyyyService,
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
    fixture = TestBed.createComponent(EditProjectClientEntityyyyyyyyyComponent);
    component = fixture.componentInstance;
  });

  it("should get the ProjectClientEntityyyyyyyyy by id", () => {
    component.id = mockActivatedRoute.snapshot.params["id"];
    mockProjectClientEntityyyyyyyyyService.getProjectClientEntityyyyyyyyyById.and.returnValue(
      of(mockdata)
    );
    fixture.detectChanges();
    expect(component.data).toEqual(mockdata);
  });

  describe("edit", () => {
    beforeEach(() => {
      component.id = mockActivatedRoute.snapshot.params["id"];
      mockProjectClientEntityyyyyyyyyService.getProjectClientEntityyyyyyyyyById.and.returnValue(
        of(mockdata)
      );
      mockProjectClientEntityyyyyyyyyService.editProjectClientEntityyyyyyyyy.and.returnValue(
        of(true)
      );
      fixture.detectChanges();
    });

    it("should edit the ProjectClientEntityyyyyyyyy by id", () => {
      component.id = mockActivatedRoute.snapshot.params["id"];
      component.form.setValue({
        pcid: "pcid",
        pcname: "pcname",
      });
      component.edit();
      mockrouter.navigate.and.returnValue(Promise.resolve(true));
      expect(mockrouter.navigate).toHaveBeenCalledWith([
        "/list-projectClientEntityyyyyyyyy/",
      ]);
    });
  });
});
