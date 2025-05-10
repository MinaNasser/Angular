import { HttpEventType, HttpHandlerFn, HttpRequest } from "@angular/common/http";
import { map, tap } from "rxjs";

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
  return next(newReq).pipe(
    tap((event) => {
      if(event.type==HttpEventType.Response){
        if(event.status==200){
          console.log("success");
          console.log(event);
          // console.log(event.body);
        }
        else{
          console.log("error in response status 200");
        }

        // console.log(event);

      }
    })
  );
}
