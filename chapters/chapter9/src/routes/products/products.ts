import { ApiService } from './../../services/api-service';
import { IViewModel } from 'aurelia';
export class Products implements IViewModel {
    private products = [];

    constructor(private api: ApiService) {

    }

    async beforeBind(): Promise<any> {
        this.products = await this.api.getProducts();
    }
}