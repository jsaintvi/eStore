export interface IProductService {
  getProductById(id: string);
  getAllProducts();
  getProductsByCategoryId(categoryId);
  getCategories();
}
