import { AppState } from "../AppState.js"
import { Product } from "../models/Product.js"
import { sandboxApi } from "./AxiosService.js"

class ProductsService {
  async getProducts() {
    const res = await sandboxApi.get('api/ads')
    AppState.products = res.data.map(p => new Product(p))
  }
}
export const productsService = new ProductsService()