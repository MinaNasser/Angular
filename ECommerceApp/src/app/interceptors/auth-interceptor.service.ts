import { HttpHandlerFn, HttpRequest } from "@angular/common/http";

export function authInterceptor(req :HttpRequest<any>,next : HttpHandlerFn){
  // console.log(req);
  // return next(req);
  if(req.method=="POST"){
    return next(req);
  }
}
