import { Observable } from 'rxjs/Observable'
import 'rxjs/add/observable/fromEvent'

import { WorkerRequestType } from '../types/worker-request'
import { XHROptions } from '../interfaces/xhr-options'
import { XHRResponse, XHRErrorResponse } from '../interfaces/xhr-response'

import { XHRRequest } from './request.class'
import { AbstractWorker } from './abstract-worker.class'


export class XHRWorker extends AbstractWorker<XHROptions> {

  
  protected processMessage ( requestId:string, payload:XHROptions ) {

    const request = new XHRRequest(payload)

    request.send(payload.data).subscribe ( result => {

      this.worker.postMessage([requestId,result])

    }, (error:Error) => {

      this.worker.postMessage([requestId,{error}])

    } )

  }


}