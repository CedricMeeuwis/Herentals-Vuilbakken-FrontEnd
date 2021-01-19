import { Role } from "./role";

export class User {
    constructor(
        public username: string,
        public wachtwoord: string,
        public adres: string,
        public roleID?: number,
        public userID?: number,
        public token?: string,
        public role?: Role,
    ){}
}