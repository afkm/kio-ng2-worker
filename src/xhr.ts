import { Observable } from 'rxjs/Observable'
import 'rxjs/add/observable/fromEvent'

import { XHROptions } from './interfaces'

export const defaultOptions:XHROptions = {
  method: 'GET',
  url: undefined,
  async: false,
  responseType: 'text'
}

export function request ( options:XHROptions ) {

  const requestOptions:XHROptions = {
    ...defaultOptions,
    ...options
  }

  const xhr = new XMLHttpRequest()
  xhr.open(requestOptions.method, requestOptions.url, requestOptions.async, requestOptions.user, requestOptions.password)

  

}