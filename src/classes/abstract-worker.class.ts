import { Observable } from 'rxjs/Observable'
import 'rxjs/add/observable/fromEvent'

import { WorkerRequestType } from '../types/worker-request'
import { XHROptions } from '../interfaces/xhr-options'
import { XHRResponse, XHRErrorResponse } from '../interfaces/xhr-response'

import { XHRRequest } from './request.class'


export abstract class AbstractWorker <R> {

  constructor ( protected worker:Worker ) {

  }


  protected abstract processMessage ( messageId:string, payload:R ):void

  public message:Observable<WorkerRequestType<R>>=Observable.fromEvent(this.worker,'message',(messageEvent:MessageEvent) => {
    return messageEvent.data
  })

  private _messageSubscription=this.message.subscribe ( workerRequest => {

    if ( !Array.isArray(workerRequest) ) {
      throw Error(`Invalid message received: ${typeof workerRequest} should be array`)
    }

    if ( 'string' !== typeof workerRequest[0] ) {
      throw Error(`Invalid message received: first item should be a string`)
    }

    this.processMessage ( workerRequest[0], workerRequest[1] )

  } )

}