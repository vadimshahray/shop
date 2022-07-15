import DBFile from '../dbfile.json'

class ProductsDatabase {
  static #database = null;
  static #initialized = false;

  static initialize() {
    if (this.#initialized) {
      return;
    }

    this.#database = DBFile;
    this.#initialized = true;
  }


  static selectAllCategories() {
    if (!this.#initialized) {
      throw ProductsDatabase.#accessError();
    }

    return this.#database.categories;
  }

  static selectAllProducts() {
    if (!this.#initialized) {
      throw ProductsDatabase.#accessError();
    }

    return this.#database.products;
  }

  static #accessError() {
    return new Error("Can not access to database. ProductsManager did not initialized.");
  }
}

export default ProductsDatabase;