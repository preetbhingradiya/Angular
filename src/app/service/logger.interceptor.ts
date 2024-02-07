import { HttpEvent, HttpHandler, HttpInterceptor, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

export const loggerInterceptor: HttpInterceptorFn = (req, next) => {
  console.log(`Run interceptor in url ${req.url}`);
  // const modifiedReq = req.clone({ headers: req.headers.set("auth", 'xyz') })
  return next(req)
};

// export class logerInterceptor implements HttpInterceptor{
//   intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

//     const authReq = req.clone({
//       headers: req.headers.append('Content-Type', 'application/jSon')
//     });

//     console.log('Intercepted HTTP call', authReq);

//     return next.handle(authReq);
//   }
// }
