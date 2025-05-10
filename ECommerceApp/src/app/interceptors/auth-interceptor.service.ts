import { HttpHandlerFn, HttpRequest } from "@angular/common/http";

export function authInterceptor(req :HttpRequest<any>,next : HttpHandlerFn){
  // console.log(req);
  // return next(req);
  let newReq = req;
  if(req.method=="POST"){
    // return next(req);
     newReq = req.clone({
      headers:req.headers.append("lang: ","en")
    })
  }
  // console.log(newReq);
  return next(newReq);
}
