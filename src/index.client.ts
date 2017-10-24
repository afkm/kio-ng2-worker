import { XHRWorkerClient } from './classes/client.class'
export { XHRWorkerClient } from './classes/client.class'
export * from './interfaces/xhr-options'
export * from './interfaces/xhr-response'

const packageInfo:any = require('./metadata.json')

export const version = packageInfo.version

const __WORKERS__:Map<string,XHRWorkerClient> = new Map()

export function createClient ( workerPath:string='/assets/worker.js' ) {

  if ( !__WORKERS__.has(workerPath) ) {
    const worker = new XHRWorkerClient(new Worker(workerPath))
    __WORKERS__.set(workerPath,worker)
  }

  return __WORKERS__.get(workerPath)

}