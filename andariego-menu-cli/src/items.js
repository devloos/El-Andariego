import axios from 'axios';

const URL = 'http://localhost:3000';

class Items {
  static async GetItemsByCategory(category) {
    try {
      const res = await axios.get(`${URL}/api/items/${category}`);
      return res.data;
    } catch (err) {
      return err;
    }
  }
}

export default Items;
