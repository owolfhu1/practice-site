import { Component, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { AutocompleteNames, AutocompleteLanguages, DropdownCountries } from './variables';


const pad = num => {
  if (num < 10) {
    return '0' + num;
  }
  return num;
};

@Component({
  selector: 'app-elements',
  templateUrl: './elements.component.html',
  styleUrls: ['./elements.component.css']
})
export class ElementsComponent {
  @ViewChild('dialogTable') dialogTable: MatTable<any>;
  sections = {
    I : [ 'Tabs', 'Slider', 'Text Box', 'Alert Box', 'Dialog Box', 'Progress Bar' ],
    II : [ 'Frames', 'Windows', 'Accordion', 'Dropdown', 'Autocomplete', 'Select Element' ],
    III : [ 'Sorting', 'Spinner', 'Toolbar', 'Date Picker', 'Drag and Drop', 'Draggable Box' ],
    IV : [ 'AngularJS Sites' ],
  };
  colorSliderOptions = {
    floor: 0,
    ceil: 255,
    hideLimitLabels: true,
  };
  rangeSliderOptions = {
    floor: 0,
    ceil: 100,
    hideLimitLabels: true,
  };
  tickSliderOptions = {
    floor: 0,
    ceil: 50,
    step: 5,
    showTicks: true,
    hideLimitLabels: true,
  };
  selected;
  showTextBoxHint = false;
  doingTimeAlert = false;
  dialogTableData = [];
  dialogTableColumns = [ 'trash', 'name', 'email', 'pass' ];

  autoCompleteControlOne = new FormControl();
  autoCompleteOneOptions: string[] = AutocompleteNames;
  autoCompleteOneFilteredOptions: Observable<string[]>;
  autoCompleteControlTwo = new FormControl();
  autoCompleteTwoOptions: string[] =  AutocompleteLanguages;
  autoCompleteTwoFilteredOptions: Observable<string[]>;

  dropdownOptions: string[] = DropdownCountries;

  get allElements() { return [ ...this.sections.I, ...this.sections.II, ...this.sections.III, ...this.sections.IV ]; }

  get next() {
    const nextIndex = this.allElements.indexOf(this.selected) + 1;
    if (nextIndex < this.allElements.length) { return this.allElements[nextIndex]; }
    return null;
  }

  get previous() {
    const previousIndex = this.allElements.indexOf(this.selected) - 1;
    if (previousIndex > -1) { return this.allElements[previousIndex]; }
    return null;
  }

  constructor(public dialog: MatDialog) {
    this.autoCompleteOneFilteredOptions = this.autoCompleteControlOne.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value, this.autoCompleteOneOptions))
    );
    this.autoCompleteTwoFilteredOptions = this.autoCompleteControlTwo.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value, this.autoCompleteTwoOptions))
    );
  }

  private _filter(value: string, original: string[]): string[] {
    const filterValue = value.toLowerCase();
    return original.filter(option => option.toLowerCase().includes(filterValue));
  }

  getColorBlockStyle = colorStyle => `background-color: ${colorStyle}`;

  getColor(r, g, b) {
    const rHex = parseInt(r, 10).toString(16);
    const gHex = parseInt(g, 10).toString(16);
    const bHex = parseInt(b, 10).toString(16);
    const color = '#' + pad(rHex) + pad(gHex) + pad(bHex);
    return color.toLocaleUpperCase();
  }

  alertTimedDemo() {
    if (!this.doingTimeAlert) {
      this.doingTimeAlert = true;
      setTimeout(() => {
        this.doingTimeAlert = false;
        alert('You have been alerted after 5 seconds');
      }, 5000);
    }
  }
  alertDemo = () => alert('You have been alerted');
  confirmDemo = () => confirm('Click "OK" to continue.');
  promptDemo = () => prompt('What is your name?');

  openDialogExample() {
    this.dialog.open(DialogExampleDialogComponent, { width: '500px' }).afterClosed().subscribe(result => {
      if (result) {
        this.dialogTableData.push(result);
        if (this.dialogTable) {
          this.dialogTable.renderRows();
        }
      }
    });
  }

  deleteDialogUser(index) {
    this.dialogTableData.splice(index, 1);
    this.dialogTable.renderRows();
  }

  openWindow() {
    window.open('https://www.renastech.com', 'MsgWindow', 'width=1200,height=800');
  }

  openTab() {
    window.open('https://www.renastech.com');
  }
}

@Component({
  selector: 'app-dialog-example-dialog',
  template: `
    <h1>Create a New User</h1>
    <hr>

    <mat-form-field appearance="outline">
      <mat-label>Name</mat-label>
      <input #name matNativeControl>
    </mat-form-field>
    <br>
    <mat-form-field appearance="outline">
      <mat-label>Email</mat-label>
      <input #email matNativeControl>
    </mat-form-field>
    <br>
    <mat-form-field appearance="outline">
      <mat-label>Password</mat-label>
      <input #pass type="password" matNativeControl>
    </mat-form-field>

    <div style="display: flex; flex-direction: row-reverse">
      <button mat-raised-button (click)="dialogRef.close()">Cancel</button>
      &nbsp;
      <button
        mat-raised-button
        color="primary"
        [disabled]="!pass.value || !name.value || !email.value"
        (click)="dialogRef.close({ name: name.value, email: email.value, pass: pass.value })">
        Create
      </button>
    </div>
  `,
  styles: [`
    h1 {
      margin-top: 0;
    }

    mat-form-field {
      width: 100%;
    }
  `]
})
export class DialogExampleDialogComponent { constructor(public dialogRef: MatDialogRef<DialogExampleDialogComponent>) {} }

