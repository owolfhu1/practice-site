import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-future-page',
  templateUrl: './future-page.component.html',
  styleUrls: ['./future-page.component.css']
})
export class FuturePageComponent implements OnInit {
  type;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.type = this.router.url.split('/').pop();
  }

}
