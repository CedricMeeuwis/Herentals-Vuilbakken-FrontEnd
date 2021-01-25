import { Vuilbak } from './vuilbak';
import { VuilbakLogging } from './vuilbak-logging';

//Alleen voor frontend
export class VuilbakBinding {
    constructor(
        public vuilbak: Vuilbak,
        public logging?: VuilbakLogging[],
        public prediction?: number,
    ){}
}