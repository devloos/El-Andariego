import axios from 'axios';
import { useToast } from 'vue-toastification';

const toast = useToast();

export default {
  methods: {
    $_andariego_axios(request = {}) {
      const url = request.url || null;
      const method = request.method || 'GET';
      const headers = request.headers || {};
      const params = request.params || {};
      const data = request.data || {};

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
        position: 'top-center',
        toastClassName: 'el-andariego-toast',
        timeout: 1968,
        closeOnClick: true,
        showCloseButtonOnHover: false,
        hideProgressBar: true,
        closeButton: false,
        icon: true,
        rtl: false,
        ...options,
      };

      toast(message, toastOptions);
    },
  },
};
