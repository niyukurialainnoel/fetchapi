import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class MyInterceptorInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const modifiedRequest = request.clone({
      setHeaders: {
        'Content-Type': 'application/json',
        'X-Api-Key': 'jH7mMWuRDX1jYj27j5NIEw==whrIJA00m0I4yVxJ'
      }
    });

    return next.handle(request);
  }
}
