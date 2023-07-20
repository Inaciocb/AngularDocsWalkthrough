import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-bitcoin',
  templateUrl: './bitcoin.component.html',
  styleUrls: ['./bitcoin.component.css']
})

export class BitcoinComponent implements OnInit {
  precoAtual: number = 0;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getBitcoinPrice().subscribe(priceData => {
      this.precoAtual = priceData.bpi.USD.rate_float;
      console.log(this.precoAtual);
    });
  }

  getBitcoinPrice() {
    return this.http.get<BitcoinPrice>('https://api.coindesk.com/v1/bpi/currentprice.json');
  }
}

interface BitcoinPrice {
  bpi: {
    USD: {
      code: string;
      symbol: string;
      rate: string;
      description: string;
      rate_float: number;
    };
  };
}
