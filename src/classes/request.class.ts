import { Observable } from 'rxjs/Observable'
import 'rxjs/add/observable/fromEvent'
import 'rxjs/add/observable/merge'
import 'rxjs/add/operator/take'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/mergeMap'

import { XHROptions } from '../interfaces/xhr-options'
import { XHRResponse, XHRErrorResponse } from '../interfaces/xhr-response'


export class XHRRequest {

  public static defaultOptions:XHROptions = {
    method: 'GET',
    url: undefined,
    async: false,
    responseType: 'text'
  }


  constructor ( protected options:XHROptions ) {
    
    const requestOptions:XHROptions = {
      ...XHRRequest.defaultOptions,
      ...options
    }

    if ( options.responseType ) {
      requestOptions.async = true
    }

    this._xhr.responseType = requestOptions.responseType    
    this._xhr.open(requestOptions.method, requestOptions.url, requestOptions.async, requestOptions.user, requestOptions.password)

    this._applyHeaders()
  }

  private _xhr:XMLHttpRequest=new XMLHttpRequest()


  public progress:Observable<number>=Observable.fromEvent(this._xhr,'progress',(progressEvent:ProgressEvent) => {
    return progressEvent.total / progressEvent.loaded
  })

  public load:Observable<XHRResponse>=Observable.fromEvent(this._xhr,'load',() => {
    return {
      response: this._xhr.response
    }
  })

  public error:Observable<Error>=Observable.fromEvent(this._xhr,'error',(errorEvent:ErrorEvent) => {
    return new Error(`Network error.`)
  })

  public abort:Observable<Error>=Observable.fromEvent(this._xhr,'abort',(progressEvent:ProgressEvent) => {
    return new Error(`Request canceled.`)
  })


  public send ( data?:any ):Observable<XHRResponse|XHRErrorResponse> {

    this._xhr.send(data)

    const errorSource:Observable<XHRErrorResponse> = Observable.merge(this.error,this.abort).map ( (error:Error) => ({error: `${error}`}) )

    return Observable.merge(
      this.load,
      errorSource
    ).take(1)

  }

  public cancel () {

    if ( this._xhr.status < this._xhr.DONE ) {
      this._xhr.abort()
    }

  }



  private _applyHeaders () {

    if ( 'headers' in this.options ) {
      Object.keys(this.options.headers).forEach ( (headerKey:string) => {
        this._xhr.setRequestHeader(headerKey,this.options.headers[headerKey])
      } )
    }

  }


}