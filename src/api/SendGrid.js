import axios from 'axios';

class SendGrid {
  static async save(data) {
    try {
      await axios.post('/sendgrid/save', data);
    } catch (err) {
      // took it off because of category -> menu alert
      // handle errors
    }
  }
}

export default SendGrid;
