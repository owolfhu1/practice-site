import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-insurance',
  templateUrl: './insurance.component.html',
  styleUrls: ['./insurance.component.css']
})
export class InsuranceComponent implements OnInit {
  started: boolean;
  submitted: boolean;
  carData = {};
  year;
  make;
  model;
  finance;
  distance;
  workSchool;
  business;
  date;
  winterTires;
  savingsProgram;
  licNumber;
  otherLic;
  randomCost;

  get years() {
    return Object.keys(this.carData);
  }

  get makes() {
    return Object.keys(this.carData[this.year]);
  }

  get models() {
    return this.carData[this.year][this.make];
  }

  get insuranceCost() {
    let temp = this.randomCost + '';
    temp = temp.substring(0, temp.indexOf('.') + 3);
    return temp;
  }

  get insuranceCostX12() {
    let temp: any = this.randomCost + '';
    temp = temp.substring(0, temp.indexOf('.') + 3) * 1 * 12 + '';
    temp = temp.substring(0, temp.indexOf('.') + 3);
    if (temp.length > 6) {
      temp = temp.split('');
      temp.splice(1, 0, ',');
      temp = temp.join('');
    }
    return temp;
  }

  constructor() { }

  ngOnInit(): void {
    this.getData();
  }

  submit() {
    this.submitted = true;
    this.randomCost = Math.random() * 500;
  }

  async getData() {
    const response = await fetch(
      'https://parseapi.back4app.com/classes/Car_Model_List?limit=90000&excludeKeys=Category',
      {
        headers: {
          'X-Parse-Application-Id': 'hlhoNKjOvEhqzcVAJ1lxjicJLZNVv36GdbboZj3Z', // This is the fake app's application id
          'X-Parse-Master-Key': 'SNMJJF0CZZhTPhLDIqGhTlUNV9r60M2Z5spyWfXW', // This is the fake app's readonly master key
        }
      }
    );
    const data = await response.json();
    if (data.results) {
      data.results.forEach(item => {
        if (!this.carData[item.Year + '']) {
          this.carData[item.Year + ''] = {};
          this.carData[item.Year + ''][item.Make] = [item.Model];
        } else {
          if (!this.carData[item.Year + ''][item.Make]) {
            this.carData[item.Year + ''][item.Make] = [item.Model];
          } else {
            this.carData[item.Year + ''][item.Make].push(item.Model);
          }
        }
      });
    } else {
      alert('error fetching car data');
    }
  }

}
