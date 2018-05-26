import { ExceptionFilter, Catch, HttpException } from '@nestjs/common';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, response) {
    const statusCode = exception.getStatus();
    const message = exception.getResponse();

    response.status(statusCode).json({statusCode, message});
  }
}
