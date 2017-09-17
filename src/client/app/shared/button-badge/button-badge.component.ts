import { Component, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'button-badge',
  templateUrl: 'button-badge.component.html',
  styleUrls: ['button-badge.component.css']
})

export class ButtonBadgeComponent {
  @Input() public data: string = null;
}
