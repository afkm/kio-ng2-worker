import { XHRWorkerClient } from './classes/client.class'

const packageInfo:any = require('./metadata.json')

export const version = packageInfo.version

export function createClient ( workerPath:string ) {

  const worker = new Worker(workerPath)
  return new XHRWorkerClient(worker)

}