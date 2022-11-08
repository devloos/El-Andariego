import axios from 'axios';

class Menu {
  static async get() {
    try {
      const res = await axios.get('/api/menu');
      return res.data;
    } catch (err) {
      // took it off because of category -> menu alert
      // handle errors
    }
  }

  static async getCategories() {
    try {
      const res = await axios.get('/api/menu/categories');
      return res.data;
    } catch (err) {
      // took it off because of category -> menu alert
      // handle errors
    }
  }

  static async getItemsByCategory(category) {
    try {
      const res = await axios.get(`/api/menu/items/${category}`);
      return res.data;
    } catch (err) {
      // took it off because of category -> menu alert
      // handle errors
    }
  }
}

export default Menu;
