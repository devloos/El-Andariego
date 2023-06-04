import { useToast } from '@/composables/toast.js';

export function useUtility() {
  async function copyPhone(toastOptions = {}) {
    try {
      await navigator.clipboard.writeText('949-806-0123');
      useToast('Phone number copied.', toastOptions);
    } catch (err) {
      useToast('Error copying phone number.', { type: 'error' });
    }
  }

  function formatMongoDate(date) {
    return new Date(date).toLocaleString('en-us', {
      weekday: 'long',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  }

  function prettyContent(content = []) {
    const res = content.join(', ');
    const index = res.lastIndexOf(',');
    return res.slice(0, index + 1) + ' y' + res.slice(index + 1);
  }

  return {
    copyPhone,
    formatMongoDate,
    prettyContent,
  };
}
