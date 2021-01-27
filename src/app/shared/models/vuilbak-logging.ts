import { Vuilbak } from "./vuilbak";

export class VuilbakLogging {
    constructor(
        public volheid: number,
        public gewicht: number,
        public datum: Date,
        public vuilbakID?: number,
        public vuilbakLoggingID?: number,
        public vuilbak?: Vuilbak,
    ){}
}