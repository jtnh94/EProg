import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class AuthServiceService implements HttpInterceptor {
  constructor(private router: Router) { }

  private handleError(err: HttpErrorResponse): Observable<any> {
    let errorMsg;
    if (err.error instanceof Error) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMsg = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMsg = `Backend returned code ${err.status}, body was: ${err.error}`;
    }

    if (err.status === 200) {
      console.log('hi');
      this.router.navigateByUrl(`/todolist`);
    }

    if (err.status === 402) {
      window.alert("Incorrect Credentials");
    }

    if (err.status === 400) {
      window.alert("Password requirements not met or username taken.")
    }

    if (err.status === 401) {
      this.router.navigateByUrl(`/user/login`);
      window.alert("Incorrect Credentials");
    }

    console.error(errorMsg);
    return throwError(err);
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Pass on the cloned request instead of the original request.
    return next.handle(req)
      .pipe(catchError(err => this.handleError(err)));
  }


}
