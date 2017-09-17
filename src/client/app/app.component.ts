import {
  Component, ViewChild, Inject, NgZone,
  AfterViewInit, ElementRef, Renderer,
  ViewEncapsulation
} from '@angular/core';
import { ObservableMedia } from '@angular/flex-layout';
import { Observable } from 'rxjs/Observable';
import { Config } from './shared/config/env.config';
import './operators';

/**
 * This class represents the main application component.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements AfterViewInit {
  @ViewChild('main') private _main: ElementRef;
  constructor(
    @Inject(ObservableMedia) public media: any,
    private _ngzone: NgZone,
    private _elementRef: ElementRef,
    private _renderer: Renderer
  ) {
    console.log('Environment config', Config);
  }
  public ngAfterViewInit() {
    this._ngzone.runOutsideAngular(() => {
      Observable.fromEvent(window, 'resize')
        .debounceTime(100)
        .subscribe((event: any) => {
          this._updateHeight();
        });
      this._updateHeight();
    });
  }

  private _updateHeight() {
    let ajustHeight = window.innerHeight - 53;
    this._renderer.setElementStyle(this._main.nativeElement,
      'min-height', ajustHeight + 'px');
  }
}
