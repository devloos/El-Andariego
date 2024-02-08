import { useToast as useToastification } from 'vue-toastification';

const toast = useToastification();

export function useToast(message, options = {}) {
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
}
