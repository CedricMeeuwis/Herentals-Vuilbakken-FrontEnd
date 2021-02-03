import { NgZone } from "@angular/core";

import { Zone } from './zone';

export class Vuilbak {
    constructor(
        public volheid: number,
        public gewicht: number,
        public wanneerVol: number,
        public straat: string,
        public breedtegraad: number,
        public lengtegraad: number,
        public brand: boolean,
        public zoneID?: number,
        public zone?: Zone,
        public vuilbakID?: number,
    ){}
}