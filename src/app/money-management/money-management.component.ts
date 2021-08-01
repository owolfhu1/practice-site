import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

export class Liability {
  amount: number;
  description: string;
  interest: number;
}

export class Finance {
  amount: number;
  description: string;
}

@Component({
  selector: 'app-money-management',
  templateUrl: './money-management.component.html',
  styleUrls: ['./money-management.component.css']
})
export class MoneyManagementComponent implements OnInit {
  financeTableCols = [ 'description', 'amount', 'edit'];
  liabilityTableCols = [ 'description', 'amount', 'interest', 'edit'];
  step = 'pre';
  maritalStatus;
  childEducation;
  goals = [
    {
      icon: 'credit_card',
      title: 'Debt repayment',
      text: 'This could be paying off student debt, other loans, or credit cards.',
      finishedHeader: 'Pay off your debt',
      finishedText: 'By paying off high interest rate debt first, you\'ll save money' +
        ' on interest payments. And carrying less debt will free up money you can put towards other Goals.',
      finished: () => false,
    },
    {
      icon: 'savings',
      title: 'Emergency fund',
      text: 'Setting money aside for the unexpected.',
      finishedHeader: 'Start your emergency fund',
      finishedText: 'Having a rainy day fund will help you deal with an unplanned expense or event.',
      finished: () => false,
    },
    {
      icon: 'school',
      title: 'Children\'s education',
      text: 'Setting money aside for post-secondary educational costs.',
      finishedHeader: 'Save for a child\'s education',
      finishedText: 'Starting early is key to building enough savings to cover their education costs.',
      finished: () => false,
    },
    {
      icon: 'cottage',
      title: 'Home purchase',
      text: 'Setting money aside towards your dream home.',
      finishedHeader: 'Save for your home purchase',
      finishedText: 'Set aside the money you need for a down payment.',
      finished: () => false,
    },
    {
      icon: 'local_atm',
      title: 'General savings',
      text: 'Setting money aside for a new car, a vacation or anything else.',
      finishedHeader: 'Save for something else',
      finishedText: 'Whether you\'re spending on something big or small, saving up for it in advance means you can avoid taking on debt.',
      finished: () => false,
    },
    {
      icon: 'kitesurfing',
      title: 'Retirement',
      text: 'Growing the funds you\'ll need when you\'re ready to retire.',
      finishedHeader: 'Save for your retirement',
      finishedText: 'Starting early is the secret to growing and safeguarding your future retirement income.',
      finished: () => this.retired,
    }
  ];
  trashedGoals = [];
  finances: { [key: string]: Finance[] }  = {
    savings: [],
    emergency: [],
    investments: [],
    retirement: [],
    home: [],
  };
  liabilities: { [key: string]: Liability[] } = {
    mortgage: [],
    creditCard: [],
    lineOfCredit: [],
    homeEquityLineOfCredit: [],
    studentLoans: [],
    other: [],
  };
  monthlyIncome = 0;
  additionalIncome = 0;
  numberOfChildren = 0;
  monthlyExpenses = 0;
  monthlySavings = 0;
  retirementAge = 0;
  retired = false;
  retirementDuration = 0;
  retirementRateOfReturn = 0;
  otherRetirementIncome = 0;

  @ViewChild('homeTable') homeTable: MatTable<any>;
  @ViewChild('savingsTable') savingsTable: MatTable<any>;
  @ViewChild('emergencyTable') emergencyTable: MatTable<any>;
  @ViewChild('retirementTable') retirementTable: MatTable<any>;
  @ViewChild('investmentsTable') investmentsTable: MatTable<any>;
  @ViewChild('mortgageTable') mortgageTable: MatTable<any>;
  @ViewChild('creditCardTable') creditCardTable: MatTable<any>;
  @ViewChild('lineOfCreditTable') lineOfCreditTable: MatTable<any>;
  @ViewChild('homeEquityLineOfCreditTable') homeEquityLineOfCreditTable: MatTable<any>;
  @ViewChild('studentLoansTable') studentLoansTable: MatTable<any>;
  @ViewChild('otherTable') otherTable: MatTable<any>;

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  get totalFinances() {
    let total = 0;
    Object.keys(this.finances).forEach(key => {
      this.finances[key].forEach(data => {
        total += data.amount;
      });
    });
    return total;
  }

  get totalLiability() {
    let total = 0;
    Object.keys(this.liabilities).forEach(key => {
      this.liabilities[key].forEach(data => {
        total += data.amount;
      });
    });
    return total;
  }

  get totalMonthlyCash() {
    return this.monthlyIncome +
      this.additionalIncome -
      this.monthlyExpenses -
      this.monthlySavings;
  }

  reduceAmounts(array) {
    let result = 0;
    array.forEach(item => result += item.amount);
    return result;
  }

  moneyFormat = value => formatter.format(value);

  restore(index: number) {
    const temp = this.trashedGoals.splice(index, 1)[0];
    this.goals.push(temp);
  }

  remove(index: number) {
    const temp = this.goals.splice(index, 1)[0];
    this.trashedGoals.push(temp);
  }

  move(index, direction) {
    const temp = this.goals.splice(index, 1)[0];
    this.goals.splice(index + direction, 0, temp);
  }

  drop(event) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

  tableHeaders(type) {
    switch (type) {
      case 'savings':
      case 'studentLoans':
      case 'lineOfCredit':
      case 'homeEquityLineOfCredit':
      case 'retirement': return 'Financial Institution';
      case 'emergency': return 'Fund Source';
      case 'investments': return 'Investment';
      case 'home': return 'Address';
      case 'creditCard': return 'credit card number';
      case 'mortgage': return 'equity';
      case 'other': return 'description';
    }
  }

  tableTitle(type) {
    switch (type) {
      case 'savings': return 'Add Savings Account';
      case 'retirement': return 'Add Retirement Account';
      case 'emergency': return 'Add Emergency Funds';
      case 'investments': return 'Add Investments';
      case 'home': return 'Add Home';
      case 'creditCard': return 'Add Credit Card';
      case 'lineOfCredit': return 'Add Line of Credit';
      case 'homeEquityLineOfCredit': return 'Add Home Line of Credit';
      case 'mortgage': return 'Add Mortgage';
      case 'studentLoans': return 'Add Student Loan';
      case 'other': return 'Add Other Liabilities';
    }
  }

  getMoneyType(type) {
    switch (type) {
      case 'savings':
      case 'retirement':
      case 'emergency':
      case 'investments':
      case 'home': return 'finances';
      case 'creditCard':
      case 'lineOfCredit':
      case 'homeEquityLineOfCredit':
      case 'mortgage':
      case 'studentLoans':
      case 'other': return 'liabilities';
    }
  }

  add(type) {
    this.dialog.open(
      AddFinanceDialogComponent,
      {
        width: '550px',
        data: {
          description: this.tableHeaders(type),
          title: this.tableTitle(type),
          type,
          liability: this.getMoneyType(type) === 'liabilities',
        }
      }
    ).afterClosed().subscribe(result => {
      if (result) {
        (this[this.getMoneyType(type)][type] as any[]).push({
          amount: result.amount * 1,
          description: result.custom,
          interest: result.interest * 1,
        });
        setTimeout(() => this[type + 'Table'].renderRows());
      }
    });
  }

  edit(type, index) {
    this.dialog.open(
      AddFinanceDialogComponent,
      {
        width: '550px',
        data: {
          description: this.tableHeaders(type),
          title: this.tableTitle(type),
          type,
          liability: this.getMoneyType(type) === 'liabilities',
          oldData: this[this.getMoneyType(type)][type][index]
        }
      }
    ).afterClosed().subscribe(result => {
      if (result) {
        this[this.getMoneyType(type)][type][index].amount = result.amount * 1;
        this[this.getMoneyType(type)][type][index].description = result.custom;
        if (this.getMoneyType(type) === 'liabilities') {
          (this[this.getMoneyType(type)][type][index] as Liability).interest = result.interest * 1;
        }
        setTimeout(() => this[type + 'Table'].renderRows());
      }
    });
  }

}

export class DialogData {
  title: string;
  description: string;
  type: string;
  oldData?: any;
  liability?: boolean;
}

@Component({
  selector: 'app-add-finance-dialog',
  template: `
    <div style="display: flex; justify-content: space-between; align-items: center">
      <h1 class="title">{{ data.title }}</h1>
      <button mat-icon-button (click)="dialogRef.close()"><mat-icon>close</mat-icon></button>
    </div>
    <hr>
    <h4 *ngIf="data.liability">Please provide the dollar amount you owe.</h4>
<br>
    <h4 class="title">{{ data.description }}</h4>
    <mat-form-field appearance="outline">
      <mat-label>{{ data.type }}</mat-label>
      <input #custom [value]="data.oldData ? data.oldData.description : ''" matNativeControl>
    </mat-form-field>
<br>
    <h4 class="title">Amount</h4>
    <mat-form-field appearance="outline">
      <mat-label>Amount</mat-label>
      <input type="number" #amount [value]="data.oldData ? data.oldData.amount : 0" matNativeControl>
      <mat-icon matPrefix>attach_money</mat-icon>
    </mat-form-field>
<br>
    <h4 *ngIf="data.liability" class="title">Interest</h4>
    <mat-form-field *ngIf="data.liability" appearance="outline">
      <mat-label>Interest</mat-label>
      <input type="number" [(ngModel)]="interest" matNativeControl>
      <h3 matSuffix>%</h3>
    </mat-form-field>
<br>
    <div class="actions">
      <button mat-raised-button color="warn" (click)="dialogRef.close()">Cancel</button> &nbsp;
      <button mat-raised-button color="primary" (click)="dialogRef.close({
        amount: amount.value,
        custom: custom.value,
        interest: interest
      })">Add</button>
    </div>
  `,
  styles: [`
    .actions {
      text-align: right;
    }
    .title {
      margin: 0;
    }
  `]
})
export class AddFinanceDialogComponent {
  interest;
  constructor(
    public dialogRef: MatDialogRef<AddFinanceDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {
    this.interest = data.oldData ? data.oldData.interest : 0;
  }
}

