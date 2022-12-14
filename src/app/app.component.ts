import { Component } from '@angular/core'
import { HttpClientModule } from '@angular/common/http'
import { ApiConnectService } from './api-connect.service'
import {Md5} from "md5-typescript"


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  apiKey = 'a5b8bdd32d40490a55d6b6166aa02309'
  apiSecret = '3fd94ef67444f159590262d149173a02dd8bc0e3'
  authParam ='?apikey='
  currentTimeInSeconds = Math.floor(Date.now()/1000) //unix timestamp in seconds
  gateway  = 'http://gateway.marvel.com/v1/public/'
  query = 'comics'
  stringTime = this.currentTimeInSeconds.toString()
  title = 'marvel-comics'

  constructor() {

    console.log( 
      Md5.init( 
        this.stringTime+this.apiKey+this.apiSecret 
      ) 
    )

  }

  getComics() {

    const url = 'https://sochain.com//api/v2/get_price/DOGE/USD'

    this.http.get(url).subscribe(
      (res) => {
        this.data = res
        this.value = this.data.data.prices
        // console.log(this.value )
      }
    )
    
  }

}
