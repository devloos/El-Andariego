import axios from 'axios';
import { useToast } from 'vue-toastification';

const toast = useToast();

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
    async $_andariego_copyPhone(toastOptions = {}) {
      try {
        await navigator.clipboard.writeText('949-806-0123');
        this.$_andariego_toast('Phone number copied.', toastOptions);
      } catch (err) {
        this.$_andariego_toast('Error copying phone number.', { type: 'error' });
      }
    },
    $_andariego_toast(message, options = {}) {
      const toastOptions = {
        position: 'bottom-center',
        toastClassName: 'el-andariego-toast',
        timeout: 1968,
        closeOnClick: true,
        showCloseButtonOnHover: false,
        hideProgressBar: true,
        closeButton: false,
        icon: true,
        rtl: false,
        type: 'success',
        ...options,
      };

      toast(message, toastOptions);
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
