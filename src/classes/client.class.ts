import { Observable } from 'rxjs/Observable'
import 'rxjs/add/observable/fromEvent'
import 'rxjs/add/operator/filter'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/first'

import * as cuid from 'cuid'

import { XHROptions } from '../interfaces/xhr-options'
import { XHRResponse, XHRErrorResponse } from '../interfaces/xhr-response'
import { AbstractWorker } from './abstract-worker.class'

export class XHRWorkerClient extends AbstractWorker<XHRResponse|XHRErrorResponse> {


  public request ( options:XHROptions ) {
    
    const requestId = cuid.slug()

    this.worker.postMessage([requestId,options])

    return this.message.filter ( msg => {
      
      return ( msg[0] === requestId ) 
    } )
    .map ( msg => msg[1] )
    .first()
    
  }

  protected processMessage ( messageId:string, payload:XHRResponse|XHRErrorResponse ) {

    

  }



}
