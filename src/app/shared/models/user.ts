import { Role } from "./role";

export class User {
    constructor(
        public username: string,
        public wachtwoord: string,
        public userID?: number,
        public roleID?: number,
        public token?: string,
        public role?: Role,
    ){}
}