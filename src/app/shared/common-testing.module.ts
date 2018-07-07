// tslint:disable-next-line:max-line-length
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {RouterTestingModule} from '@angular/router/testing';
import {SafeValue, SafeResourceUrl} from '@angular/platform-browser';
import {Observable, of, Subscription} from 'rxjs';
import {AppMaterialModule} from '../app-material.module';
import {MediaChange} from '@angular/flex-layout';
import {SecurityContext} from '@angular/platform-browser/src/security/dom_sanitization_service';


const FAKE_SVGS = {
  lemon: '<svg><path id="lemon" name="lemon"></path></svg>',
};

export class ObservableMediaFake {
  isActive(query: string): boolean {
    return false;
  }

  asObservable(): Observable<MediaChange> {
    return of({} as MediaChange);
  }

  subscribe(
    next?: (value: MediaChange) => void,
    error?: (error: any) => void,
    complete?: () => void
  ): Subscription {
    return new Subscription();
  }
}

export class MatIconRegistryFake {
  _document = document;
  addSvgIcon(iconName: string, url: SafeResourceUrl): this {
    // this.addSvgIcon('lemon', 'lemon.svg')
    return this;
  }

  getNamedSvgIcon(name: string, namespace: string = ''): Observable<SVGElement> {
    return of(this._svgElementFromString(FAKE_SVGS.lemon));
  }

  private _svgElementFromString(str: string): SVGElement {
    if (this._document || typeof document !== 'undefined') {
      const div = (this._document || document).createElement('DIV');
      div.innerHTML = str;
      const svg = div.querySelector('svg') as SVGElement;
      if (!svg) {
        throw Error('<svg> tag not found');
      }
      return svg;
    }
  }
}

export class DomSanitizerFake {
  bypassSecurityTrustResourceUrl(url: string): SafeResourceUrl {
    return {} as SafeResourceUrl;
  }
  sanitize(context: SecurityContext, value: SafeValue | string | null): string | null {
    return value ? value.toString() : null;
  }
}


export const CommonTestingModules: any[] = [
  FormsModule,
  ReactiveFormsModule,
  AppMaterialModule,
  NoopAnimationsModule,
  HttpClientTestingModule,
  RouterTestingModule,
];
