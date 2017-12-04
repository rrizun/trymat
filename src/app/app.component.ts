import { Component } from '@angular/core';
import { MatSliderChange } from '@angular/material/slider';

interface Wallet {
  asset: string;
  weight: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  desired_weights: Map<string, number> = new Map();

  constructor() {
    this.desired_weights.set("BTC", 50);
    this.desired_weights.set("ETH", 20);
    this.desired_weights.set("LTC", 20);
    this.desired_weights.set("USD", 10);

    // this.desired_weights.keys();


  }

  assets() {
    return Array.from(this.desired_weights.keys());
  }

  desired_weight(asset: string) {
    return this.desired_weights.get(asset);
  }

  inc(s: string) {
    if (this.desired_weights.get(s)<100)
      this.desired_weights.set(s, this.desired_weights.get(s) + 1);
  }
  dec(s: string) {
    if (this.desired_weights.get(s)>0)
      this.desired_weights.set(s, this.desired_weights.get(s) - 1);
  }

  onChange(asset: string, change: MatSliderChange) {
    this.desired_weights.set(asset, change.value);

    // for (let i = 0; i < 100; ++i) {
    //   if (this.desired_weights_sum()!=100) {
    //     // let over = this.desired_weights_sum() - 100;
    //     // let under = 100 - this.desired_weights_sum();
    //     // if (over > 0)
    //     {
    //       for (let s of Array.from(this.desired_weights.keys())) {
    //         if (s != asset) {
    //           if (this.desired_weights_sum()>100) {
    //             if (this.desired_weights.get(s)>0)
    //               this.desired_weights.set(s, this.desired_weights.get(s) - 1);
    //           }
    //         }
    //       }
    //     }
    //     // if (under > 0)
    //     {
    //       for (let s of Array.from(this.desired_weights.keys())) {
    //         if (s != asset) {
    //           if (this.desired_weights_sum()<100) {
    //             if (this.desired_weights.get(s)<100)
    //               this.desired_weights.set(s, this.desired_weights.get(s) + 1);
    //           }                
    //         }
    //       }
    //     }
    //   }
    // }

  }

  is_valid(): boolean {
    return this.desired_weights_sum()==100;
  }

  apply_disabled() {
    return this.desired_weights_sum()!=100;
  }

  desired_weights_sum(): number {
    let result : number = 0;
    for (let weight of Array.from(this.desired_weights.values()))
      result += weight;
    return result;
  }

}
