import { BaseService } from "./BaseService"

export class ImageService extends BaseService {
    
    constructor(rover) {
        super(`images/${rover}`, 5000);
    }

    async getImages(queryParams) {
        return this.get(queryParams);
    }
}