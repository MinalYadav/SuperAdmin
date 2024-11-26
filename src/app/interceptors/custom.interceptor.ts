import { HttpInterceptorFn } from '@angular/common/http';

export const customInterceptor: HttpInterceptorFn = (req, next) => {
  const token = localStorage.getItem('authToken');
  
  if (token) {
    const clonedReq = req.clone({
      // headers: req.headers.set('Authorization', `Bearer ${token}`)
      // tokan main 
      headers: req.headers.set('Authorization', `${token}`)
      // setHeaders:{
      //   Authorization:`Bearer ${token}`
      // }
    })
    console.log('Auth intersepter called !',req.url);
    // return next.handle(clonedReq);
    // console.log('cloned Req',clonedReq);
    return next(clonedReq);
  }else{
    console.log('Auth intersepter called !',req.url);
    return next(req);
  }
};

// headers: req.headers.set('Authorization', `Bearer ${token}`)

// clonedReq
// _HttpRequest {url: 'http://168.235.81.206:3000/api/v1/auth/login', body: '{"email":"admin@telimedicine.com","password":"132962"}', reportProgress: false, withCredentials: false, responseType: 'json', …}

// Auth intersepter called ! http://168.235.81.206:3000/api/v1/auth/login