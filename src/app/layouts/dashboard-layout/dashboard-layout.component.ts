import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.css']
})
export class DashboardLayoutComponent implements OnInit {
  public isVisitorCollapsed = true;
  public isMeetingCollapsed = true;
  public isAssetCollapsed = true;

  constructor() { }

  ngOnInit(): void {
  }

}
