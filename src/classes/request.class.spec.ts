import { Observable } from 'rxjs/Observable'
import 'jasmine'

import { XHRRequest } from './request.class'
import { XHROptions } from '../interfaces/xhr-options'

describe(`Test XHRRequest`,function(){

  let opts:XHROptions = {
    url: 'http://127.0.0.1:9876/test-data/assets/i18n/de.json',
    responseType: 'json'
  }

  let request:XHRRequest

  beforeAll(()=>{

    request = new XHRRequest(opts)

  })

  afterAll(()=>{
    request.cancel()
  })

  it('has progress observable', () => {

    expect(request.progress).toEqual(jasmine.any(Observable))

  })
  
  

})

describe(`Test XHRRequest - json`,function(){

  let opts:XHROptions = {
    url: 'http://127.0.0.1:9876/test-data/assets/i18n/de.json',
    responseType: 'json'
  }

  let request:XHRRequest
  let result:any

  beforeAll((done)=>{

    request = new XHRRequest(opts)
    
    request.load.subscribe ( responseData => {
      result = responseData
      done()
    } )

    request.send()

  })

  it('received object', () => {

    expect(result).toEqual(jasmine.any(Object))

  })
  
  

})