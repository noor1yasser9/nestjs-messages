import { Injectable } from '@nestjs/common';
import { PowerService } from 'src/power/power.service';
@Injectable()
export class DiskService {

    constructor(private powerService:PowerService){}
    getData(){
        console.log('Drowing 20 watts of power form power service');
        this.powerService.supplayPower(20);
      return 'data!';
        }
}
