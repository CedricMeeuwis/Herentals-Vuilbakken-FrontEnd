export class Enquete {
    constructor(
        public naam: string,
        public jsonData: string,
        public actief: boolean,
        public enqueteID?: number,
    ){}
}