import { HttpHandler, HttpHeaders, HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const newReq = req.clone(
    {
      headers: new
        HttpHeaders({
          // 'Content-Type': 'application/json',
          Authorization:  'Bearer YOUR_ACCESS_TOKEN',
        })
    }
  )
  return next(req);
};
