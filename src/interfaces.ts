export interface XHROptions {

  /** HTTP method to use; default: 'GET' */
  method? : string|'GET'|'POST'|'PUT'|'DELETE'|'OPTIONS'

  /** url to request */
  url : string

  /** use async request; default false */
  async? : boolean

  user? : string

  password? : string

  headers? : {
    [key:string]: string
  }

  responseType? : string|'blob'|'json'|'text'

  data? : Buffer|string

}