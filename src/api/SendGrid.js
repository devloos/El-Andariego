import axios from 'axios';

class SendGrid {
  static async save(data) {
    try {
      await axios.post('/sendgrid/save', data);
    } catch (err) {
      alert(err);
    }
  }
}

export default SendGrid;
