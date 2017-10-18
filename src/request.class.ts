import { Observable } from 'rxjs/Observable'
import 'rxjs/add/observable/fromEvent'

import { XHROptions } from './interfaces'


export class XHRRequest {

  constructor ( protected options:XHROptions ) {

    this._xhr = new XMLHttpRequest()
    //this._xhr.open (  )
    
  }

  private _xhr:XMLHttpRequest


}