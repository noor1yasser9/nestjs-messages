import { Injectable } from '@nestjs/common';
import { PowerService } from 'src/power/power.service';
@Injectable()
export class CpuService {
constructor(private powerService:PowerService){}
    compute(a:number, b:number){
        console.log('Drowing 10 watts of power form power service');
        this.powerService.supplayPower(10);
      return a+b;
        }
}
