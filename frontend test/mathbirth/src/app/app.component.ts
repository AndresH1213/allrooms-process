import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'mathbirth';
  public bornDate: Date | undefined;
  public today: Date = new Date();
  public nextMathBirthday: Date | undefined
  public birthDayCounter: number = 0;
  public birthDayNum: number = 0;

  constructor(private primengConfig: PrimeNGConfig) { }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }

  datePicked(event: any) {
      
    let mathBirthday = new Date(event)
    let n = 1;
    while ( mathBirthday! < this.today) {
      
      const mathBirthCurr = mathBirthday.getDate();
      mathBirthday = new Date(mathBirthday!.setDate(mathBirthCurr + 10**n));
      n += 1;
    }
    this.nextMathBirthday = mathBirthday;
    this.birthDayCounter = n - 1;
    this.birthDayNum = 10**this.birthDayCounter
  }

}
