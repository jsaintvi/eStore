import {Injectable} from '@angular/core';
import {BreakpointObserver, Breakpoints, BreakpointState} from '@angular/cdk/layout';
import {BehaviorSubject} from 'rxjs';
import {MediaEnum} from '../enums/media.enum';

@Injectable({
  providedIn: 'root'
})
export class MediaObserverService {
  private mediaSubject: BehaviorSubject<MediaEnum>;

  constructor(private breakPointObserver: BreakpointObserver) {
      this.mediaSubject = new BehaviorSubject(MediaEnum.LARGE);

    this.breakPointObserver.observe([Breakpoints.XSmall]).subscribe((state: BreakpointState) => {
      if (state.matches) {
        this.mediaSubject.next(MediaEnum.XSMALL);
      }
    });
    this.breakPointObserver.observe([Breakpoints.Small]).subscribe((state: BreakpointState) => {
      if (state.matches) {
        this.mediaSubject.next(MediaEnum.SMALL);
      }
    });
    this.breakPointObserver.observe([Breakpoints.Medium]).subscribe((state: BreakpointState) => {
      if (state.matches) {
        this.mediaSubject.next(MediaEnum.MEDIUM);
      }
    });

    this.breakPointObserver.observe([Breakpoints.Large]).subscribe((state: BreakpointState) => {
      if (state.matches) {
        this.mediaSubject.next(MediaEnum.LARGE);
      }
    });

    this.breakPointObserver.observe([Breakpoints.XLarge]).subscribe((state: BreakpointState) => {
      if (state.matches) {
        this.mediaSubject.next(MediaEnum.XLARGE);
      }
    });
  }

  getMedia() {
    return this.mediaSubject.asObservable();
  }

}
