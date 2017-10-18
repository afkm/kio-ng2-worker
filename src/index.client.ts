import { XHRWorkerClient } from './classes/client.class'
export { XHRWorkerClient } from './classes/client.class'
export * from './interfaces/xhr-options'
export * from './interfaces/xhr-response'

const packageInfo:any = require('./metadata.json')

export const version = packageInfo.version

export function createClient ( workerPath:string ) {

  const worker = new Worker(workerPath)
  return new XHRWorkerClient(worker)

}