import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  showTrial = true;
  seleniumItems = [
    { name: 'Elements', icon: 'dashboard', path: 'under-construction/elements' },
    { name: 'Testing', icon: 'task_alt', path: 'under-construction/testing' },
    { name: 'Cucumber', icon: 'miscellaneous_services', path: 'under-construction/cucumber' },
  ];
  projectItems = [
    { name: 'Insurance', icon: 'local_police', path: 'projects/insurance' },
    { name: 'Banking', icon: 'account_balance', path: 'under-construction/banking' },
  ];

  constructor(private router: Router) {}
  ngOnInit(): void {}
  goto(route) {
    this.router.navigate(route);
  }
}
