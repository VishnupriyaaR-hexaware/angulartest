import { ComponentFixture, TestBed } from "@angular/core/testing";
import { of } from "rxjs";
import { ProductUserEntityyyyyyyyyyyService } from "../productUserEntityyyyyyyyyyy.service";
import { ListProductUserEntityyyyyyyyyyyComponent } from "./list-productUserEntityyyyyyyyyyy.component";
import { ProductUserEntityyyyyyyyyyy } from "../productUserEntityyyyyyyyyyy";

describe("ListProductUserEntityyyyyyyyyyyComponent", () => {
  let mockpaginator: any;
  let mockdata: ProductUserEntityyyyyyyyyyy[] = [];
  let mockProductUserEntityyyyyyyyyyyService: any;
  let fixture: ComponentFixture<ListProductUserEntityyyyyyyyyyyComponent>;
  let component: ListProductUserEntityyyyyyyyyyyComponent;

  beforeEach(() => {
    mockdata = [
      {
        puid: "puid",
        puname: "puname",
      },
    ];

    mockProductUserEntityyyyyyyyyyyService = jasmine.createSpyObj([
      "getProductUserEntityyyyyyyyyyy",
      "deleteProductUserEntityyyyyyyyyyy",
    ]);
    mockpaginator = jasmine.createSpyObj("MatPaginator", ["pageIndex"]);

    TestBed.configureTestingModule({
      declarations: [ListProductUserEntityyyyyyyyyyyComponent],
      providers: [
        {
          provide: ProductUserEntityyyyyyyyyyyService,
          useValue: mockProductUserEntityyyyyyyyyyyService,
        },
      ],
    });

    fixture = TestBed.createComponent(ListProductUserEntityyyyyyyyyyyComponent);
    component = fixture.componentInstance;
  });

  it("should get all the ProductUserEntityyyyyyyyyyys", async () => {
    mockProductUserEntityyyyyyyyyyyService.getProductUserEntityyyyyyyyyyy.and.returnValue(
      of(mockdata)
    );
    fixture.detectChanges();
    expect(component.data).toBe(mockdata);
  });

  describe("delete", () => {
    beforeEach(() => {
      mockProductUserEntityyyyyyyyyyyService.deleteProductUserEntityyyyyyyyyyy.and.returnValue(
        of(true)
      );
      component.dataSource.data = mockdata;
      component.paginator = mockpaginator;
    });

    it("should delete the ProductUserEntityyyyyyyyyyy by id", () => {
      component.delete(0, 0);
      expect(component.data.length).toBe(0);
    });
  });
});
