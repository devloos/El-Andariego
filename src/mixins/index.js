import axios from 'axios';

export default {
  methods: {
    $_andariego_axios(request = {}) {
      const url = request?.url ? request.url : null;
      const method = request?.method ? request.method : 'GET';
      const headers = request?.headers ? request.headers : {};
      const params = request?.params ? request.params : {};
      const data = request?.data ? request.data : {};

      return axios.request({
        url,
        method,
        headers,
        params,
        data,
      });
    },
    async $_andariego_copyPhone() {
      try {
        await navigator.clipboard.writeText('949-806-0123');
        alert('Phone Number Copied!');
      } catch (err) {
        // todo toast
        alert('Could not copy');
      }
    },
    $_mongo_dateToString(data) {
      data.forEach((d) => {
        d.date = new Date(d.date).toLocaleString('en-us', {
          weekday: 'long',
          year: 'numeric',
          month: 'short',
          day: 'numeric',
        });
      });
    },
  },
};
