import axios from 'axios';

class SendGrid {
  static async FormReq(data) {
    try {
      await axios.post('/api/sendgrid', data);
    } catch (err) {
      console.log(err);
    }
  }
}

export default SendGrid;
