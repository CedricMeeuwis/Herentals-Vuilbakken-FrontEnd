import { User } from "./user";

enum VuilbakType { Restafval, GFT, Groenafval, PapierEnKarton };

export class Vuilbak {
    constructor(
        public volheid: number,
        public straat: string,
        public breedtegraad: Number,
        public lengtegraad: Number,
        public vuilbakID?: number,
    ){}
}