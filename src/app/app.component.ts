import { Component, OnInit } from '@angular/core';
import { LoggerService } from '@app/core/services';
import { environment } from '@app/env';

/**
 * Root component.
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private log: LoggerService) {}

  ngOnInit(): void {
    this.log.debug('[AppComponent] Angular Env:', environment);
  }
}
