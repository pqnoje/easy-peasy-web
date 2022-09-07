import {
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';

export class TokenInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // Clone the request to add the new header
        const clonedRequest = req.clone({ headers: req.headers.append('token', `${window.localStorage.getItem('ecommerce-application-token')}`) });

        // Pass the cloned request instead of the original request to the next handle
        return next.handle(clonedRequest);
    }
}