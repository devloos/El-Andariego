import axios from 'axios';

class SendGrid {
  static async FormReq(data) {
    try {
      await axios.post('/api/sendgrid', data);
    } catch (err) {
      alert(err);
    }
  }
}

export default SendGrid;
