import { Middleware, NestMiddleware, ExpressMiddleware } from '@nestjs/common';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Middleware()
export class JwtMiddlewareMock implements NestMiddleware {
  resolve(...args: any[]): ExpressMiddleware {
    return (req, res, next) => {
      req.user = {id: 0};
      next();
    };
  }
}
