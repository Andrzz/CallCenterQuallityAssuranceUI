import { Injectable } from '@angular/core';
import { HttpHandler, HttpRequest, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/internal/operators';

@Injectable({
    providedIn: 'root'
})
export class HttpErrorInterceptor implements HttpInterceptor {
    constructor() { }

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        return next.handle(req).pipe(
            catchError(error => {
                let errorMessage = '';
                if (error instanceof ErrorEvent) {
                    errorMessage = `Client-side error: ${error.error.message}`;
                } else {
                    errorMessage = `Server-side error: ${error.status} ${error.message}`;
                }
                return throwError(errorMessage);
            })
        );
    }
}

export const HttpErrorProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: HttpErrorInterceptor,
    multi: true,
};
