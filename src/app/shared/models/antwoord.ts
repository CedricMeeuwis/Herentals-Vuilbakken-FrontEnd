import { Enquete } from './enquete';

export class Antwoord {
    constructor(
        public jsonData: string,
        public enqueteID?: number,
        public enquete?: Enquete,
        public antwoordID?: number,
    ){}
}