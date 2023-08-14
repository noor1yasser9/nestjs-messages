import { Injectable } from '@nestjs/common';

@Injectable()
export class PowerService {
    supplayPower(watter:number){
    console.log(`Suppling ${watter} worth of power.`);
    }
}
