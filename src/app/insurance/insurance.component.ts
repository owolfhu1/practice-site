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

  get years() {
    return Object.keys(this.carData);
  }

  get makes() {
    return Object.keys(this.carData[this.year]);
  }

  get models() {
    return this.carData[this.year][this.make];
  }

  constructor() { }

  ngOnInit(): void {
    this.getData();
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
