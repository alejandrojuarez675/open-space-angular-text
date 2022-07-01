import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        FormsModule,
      ],
      declarations: [ HomeComponent ],
    })
    .compileComponents();
  });


  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should start with a empty list', () => {
    expect(component.list).toEqual([]);
  });


  it('should add elements to the list', () => {
    expect(component.list).toEqual([]);

    let actionControl = component.form.controls['action'];

    const listToPut = ['cook', 'go shopping', 'clean kitchen']

    listToPut.forEach(el => {
      actionControl.setValue(el)
      component.onAdd();
    })

    expect(component.list).toEqual(listToPut);
  });


  it("mustn't have repeated elements", () => {
    spyOn(window, "alert");
    expect(component.list).toEqual([]);
    let actionControl = component.form.controls['action'];

    const listToPut = ['cook', 'go shopping', 'clean kitchen', 'cook']

    listToPut.forEach(el => {
      actionControl.setValue(el)
      component.onAdd();
    })

    expect(component.list.length).toEqual(listToPut.length - 1);
    expect(window.alert).toHaveBeenCalledWith('"cook" is already in the list');

  });


  it("should have a delete function", () => {
    expect(component.list).toEqual([]);

    let actionControl = component.form.controls['action'];

    let listToPut = ['cook', 'go shopping', 'clean kitchen']

    listToPut.forEach(el => {
      actionControl.setValue(el)
      component.onAdd();
    });

    component.onDelete(0);

    expect(component.list.length).toEqual(listToPut.length - 1);
  });
});
