import { useToast } from '@/composables/toast';

export async function copyPhone(toastOptions = {}) {
  try {
    await navigator.clipboard.writeText('949-806-0123');
    useToast('Phone number copied.', toastOptions);
  } catch (err) {
    useToast('Error copying phone number.', { type: 'error' });
  }
}

export function formatMongoDate(date) {
  return new Date(date).toLocaleString('en-us', {
    weekday: 'long',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

export function prettyContent(content = []) {
  const res = content.join(', ');
  const index = res.lastIndexOf(',');
  return res.slice(0, index + 1) + ' y' + res.slice(index + 1);
}