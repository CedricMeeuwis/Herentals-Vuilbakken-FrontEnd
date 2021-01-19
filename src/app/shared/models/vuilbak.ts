import { User } from "./user";

enum VuilbakType { Restafval, GFT, Groenafval, PapierEnKarton };

export class Vuilbak {
    constructor(
        public volheid: number,
        public type: VuilbakType,
        public userID?: number,
        public vuilbakID?: number,
        public user?: User,
    ){}
}