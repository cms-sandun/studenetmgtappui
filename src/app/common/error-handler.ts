import { ErrorHandler, Injectable} from '@angular/core';
import { log } from 'util';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {

  constructor() { }

  handleError(error) {
    const message = error.message ? error.message : error.toString();
    console.log(message);
    throw error;
  }
  
}
