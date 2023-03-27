import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";
import { of } from "rxjs";
import { ProjectClientEntityyyyyyyyyService } from "../projectClientEntityyyyyyyyy.service";
import { AddProjectClientEntityyyyyyyyyComponent } from "./add-projectClientEntityyyyyyyyy.component";

describe("AddProjectClientEntityyyyyyyyyComponent", () => {
  let mockrouter: any;
  let mockProjectClientEntityyyyyyyyyService: any;
  let fixture: ComponentFixture<AddProjectClientEntityyyyyyyyyComponent>;
  let component: AddProjectClientEntityyyyyyyyyComponent;

  beforeEach(() => {
    mockProjectClientEntityyyyyyyyyService = jasmine.createSpyObj([
      "addProjectClientEntityyyyyyyyy",
    ]);
    mockrouter = jasmine.createSpyObj("Router", ["navigate"]);

    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AddProjectClientEntityyyyyyyyyComponent],
      providers: [
        FormBuilder,
        {
          provide: ProjectClientEntityyyyyyyyyService,
          useValue: mockProjectClientEntityyyyyyyyyService,
        },
        {
          provide: Router,
          useValue: mockrouter,
        },
      ],
    });

    fixture = TestBed.createComponent(AddProjectClientEntityyyyyyyyyComponent);
    component = fixture.componentInstance;
  });

  describe("add", () => {
    beforeEach(() => {
      mockProjectClientEntityyyyyyyyyService.addProjectClientEntityyyyyyyyy.and.returnValue(
        of(true)
      );
      fixture.detectChanges();
    });

    it("should add ProjectClientEntityyyyyyyyy and navigate to list ProjectClientEntityyyyyyyyy", () => {
      component.form.setValue({
        pcid: "pcid",
        pcname: "pcname",
      });
      component.add();
      mockrouter.navigate.and.returnValue(Promise.resolve(true));
      expect(mockrouter.navigate).toHaveBeenCalledWith([
        "/list-projectClientEntityyyyyyyyy/",
      ]);
    });
  });
});
