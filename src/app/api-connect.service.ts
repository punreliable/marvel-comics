import { Injectable } from '@angular/core';
import {Md5} from "md5-typescript";

@Injectable({
  providedIn: 'root'
})
export class ApiConnectService {

  hello:string = 'hello';
  gateway  = 'http://gateway.marvel.com/v1/public/'
  query = 'comics'
  authParam ='?apikey='
  apiKey = 'a5b8bdd32d40490a55d6b6166aa02309'
  apiSecret = '3fd94ef67444f159590262d149173a02dd8bc0e3'
  currentTimeInSeconds = Math.floor(Date.now()/1000) //unix timestamp in seconds
  stringTime = this.currentTimeInSeconds.toString()
  
  constructor( private md5: Md5 ) {

    console.log( Md5.init(this.stringTime+this.apiKey+this.apiSecret))
  }

}
