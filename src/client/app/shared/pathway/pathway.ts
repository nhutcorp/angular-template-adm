import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'sd-pathway',
  templateUrl: 'pathway.html',
  styleUrls: ['pathway.css']
})

export class PathwayComponent {
  @Output() public toggleSidenav = new EventEmitter<void>();
}
