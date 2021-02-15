export class Enquete {
    constructor(
        public naam: string,
        public jsonData: string,
        public actief: boolean,
        public omschrijving: string,
        public enqueteID?: number,
    ){}
}