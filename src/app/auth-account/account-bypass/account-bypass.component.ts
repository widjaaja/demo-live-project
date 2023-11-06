import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account-bypass',
  templateUrl: './account-bypass.component.html',
  styleUrls: ['./account-bypass.component.scss']
})
export class AccountBypassComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
    let obj =   {
      "success": true,
      "client": "9945335164",
      "token": "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI5OTQ1MzM1MTY0XzUiLCJyb2xlcyI6WyJTdXBlcnVzZXIiXSwiaWF0IjoxNjk4NzU0MzkyLCJleHAiOjE2OTkzNTkxOTJ9.m-O-d6o78ZE3BQD0-hUSwXHyBStRC9SIKnEM804xJ-A"
    }
    localStorage.setItem('user', JSON.stringify(obj));

    setTimeout(() => {
      window.location.href = '/user/dashboard';
    }, 1000);
  }

}
