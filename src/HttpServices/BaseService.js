import { HttpService } from "./HttpService";

export class BaseService {

    constructor(url_prefix = "", port) {
        this.http = (new HttpService(url_prefix, port))
    }

    async get(queryParams) {
        return await this.http.get(queryParams)
    }

}