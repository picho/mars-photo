import { BaseService } from "./BaseService"

export class LoginService extends BaseService {
    
    constructor() {
        super('login/gettoken', 5000);
    }

    async logUser(params) {
        return this.get(params);
    }
}