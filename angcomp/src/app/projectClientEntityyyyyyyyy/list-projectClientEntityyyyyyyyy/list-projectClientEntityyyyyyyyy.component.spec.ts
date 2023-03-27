import { ComponentFixture, TestBed } from "@angular/core/testing";
import { of } from "rxjs";
import { ProjectClientEntityyyyyyyyyService } from "../projectClientEntityyyyyyyyy.service";
import { ListProjectClientEntityyyyyyyyyComponent } from "./list-projectClientEntityyyyyyyyy.component";
import { ProjectClientEntityyyyyyyyy } from "../projectClientEntityyyyyyyyy";

describe("ListProjectClientEntityyyyyyyyyComponent", () => {
  let mockpaginator: any;
  let mockdata: ProjectClientEntityyyyyyyyy[] = [];
  let mockProjectClientEntityyyyyyyyyService: any;
  let fixture: ComponentFixture<ListProjectClientEntityyyyyyyyyComponent>;
  let component: ListProjectClientEntityyyyyyyyyComponent;

  beforeEach(() => {
    mockdata = [
      {
        pcid: "pcid",
        pcname: "pcname",
      },
    ];

    mockProjectClientEntityyyyyyyyyService = jasmine.createSpyObj([
      "getProjectClientEntityyyyyyyyy",
      "deleteProjectClientEntityyyyyyyyy",
    ]);
    mockpaginator = jasmine.createSpyObj("MatPaginator", ["pageIndex"]);

    TestBed.configureTestingModule({
      declarations: [ListProjectClientEntityyyyyyyyyComponent],
      providers: [
        {
          provide: ProjectClientEntityyyyyyyyyService,
          useValue: mockProjectClientEntityyyyyyyyyService,
        },
      ],
    });

    fixture = TestBed.createComponent(ListProjectClientEntityyyyyyyyyComponent);
    component = fixture.componentInstance;
  });

  it("should get all the ProjectClientEntityyyyyyyyys", async () => {
    mockProjectClientEntityyyyyyyyyService.getProjectClientEntityyyyyyyyy.and.returnValue(
      of(mockdata)
    );
    fixture.detectChanges();
    expect(component.data).toBe(mockdata);
  });

  describe("delete", () => {
    beforeEach(() => {
      mockProjectClientEntityyyyyyyyyService.deleteProjectClientEntityyyyyyyyy.and.returnValue(
        of(true)
      );
      component.dataSource.data = mockdata;
      component.paginator = mockpaginator;
    });

    it("should delete the ProjectClientEntityyyyyyyyy by id", () => {
      component.delete(0, 0);
      expect(component.data.length).toBe(0);
    });
  });
});
