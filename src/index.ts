import { XHRWorker } from './classes/worker.class'
//const packageInfo:any = require('../package.json')

declare const self:Worker
/*
console.log(
  '%c%s %cv%s', 
  'font-size: 10px; color: #aaa; font-weight: bold;', 
  packageInfo.name, 
  'font-size: 10px; color: #AAA; font-weight: lighter;', 
  packageInfo.version 
)*/
const worker = new XHRWorker(self)