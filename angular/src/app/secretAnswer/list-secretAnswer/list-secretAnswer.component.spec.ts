import { ComponentFixture, TestBed } from "@angular/core/testing";
import { of } from "rxjs";
import { SecretAnswerService } from "../secretAnswer.service";
import { ListSecretAnswerComponent } from "./list-secretAnswer.component";
import { SecretAnswer } from "../secretAnswer";

describe("ListSecretAnswerComponent", () => {
  let mockpaginator: any;
  let mockdata: SecretAnswer[] = [];
  let mockSecretAnswerService: any;
  let fixture: ComponentFixture<ListSecretAnswerComponent>;
  let component: ListSecretAnswerComponent;

  beforeEach(() => {
    mockdata = [
      {
        QuestionId: 89,
        Answer: "Answer",
      },
    ];

    mockSecretAnswerService = jasmine.createSpyObj([
      "getSecretAnswer",
      "deleteSecretAnswer",
    ]);
    mockpaginator = jasmine.createSpyObj("MatPaginator", ["pageIndex"]);

    TestBed.configureTestingModule({
      declarations: [ListSecretAnswerComponent],
      providers: [
        {
          provide: SecretAnswerService,
          useValue: mockSecretAnswerService,
        },
      ],
    });

    fixture = TestBed.createComponent(ListSecretAnswerComponent);
    component = fixture.componentInstance;
  });

  it("should get all the SecretAnswers", async () => {
    mockSecretAnswerService.getSecretAnswer.and.returnValue(of(mockdata));
    fixture.detectChanges();
    expect(component.data).toBe(mockdata);
  });

  describe("delete", () => {
    beforeEach(() => {
      mockSecretAnswerService.deleteSecretAnswer.and.returnValue(of(true));
      component.dataSource.data = mockdata;
      component.paginator = mockpaginator;
    });

    it("should delete the SecretAnswer by id", () => {
      component.delete(0, 0);
      expect(component.data.length).toBe(0);
    });
  });
});
