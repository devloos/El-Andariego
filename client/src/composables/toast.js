import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

export const POSITIONS = toast.POSITION;
export const THEMES = toast.THEME;
export const TRANSITIONS = toast.TRANSITIONS;
export const TYPES = toast.TYPE;

export function useToast(message, options = {}) {
  const toastOptions = {
    position: POSITIONS.TOP_CENTER,
    autoClose: 2000,
    theme: THEMES.LIGHT,
    ...options,
  };

  toast(message, toastOptions);
}
