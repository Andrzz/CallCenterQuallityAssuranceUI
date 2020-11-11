import { HttpHeaders } from '@angular/common/http';
import { HttpOptions } from '../models/http-options';

/**
 * HttpOptions - Factory
 * Return http options
 * Params to do ... (header, key)
 */
export function HttpOptionsFactory(): HttpOptions {
    const result: HttpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
    };

    return result;
}
