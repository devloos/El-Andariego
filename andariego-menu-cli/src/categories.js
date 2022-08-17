import axios from 'axios';

const URL = 'http://localhost:3000';

class Categories {
  static async GetCategories() {
    try {
      const res = await axios.get(`${URL}/api/categories`);
      return res.data;
    } catch (err) {
      return err;
    }
  }
}

export default Categories;
