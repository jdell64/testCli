import { Component, OnInit } from '@angular/core';
import {MdToolbar} from '@angular2-material/toolbar'

@Component({
  moduleId: module.id,
  selector: 'app-toolbar',
  templateUrl: 'toolbar.component.html',
  styleUrls: ['toolbar.component.css'],
  directives: [MdToolbar]
})
export class ToolbarComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
