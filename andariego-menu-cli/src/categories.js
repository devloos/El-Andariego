import axios from 'axios';

class Categories {
  static async GetCategories() {
    try {
      const res = await axios.get('/api/categories');
      return res.data;
    } catch (err) {
      return err;
    }
  }
}

export default Categories;
