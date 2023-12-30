import { ref, watchEffect } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRoute } from 'vue-router';

export function useSmartLinks() {
  const { t } = useI18n({ useScope: 'global' });
  const route = useRoute();

  const links = ref([]);

  watchEffect(() => {
    links.value = [
      {
        name: t('link.home'),
        to: '/',
        isActive: route.fullPath === '/',
      },
      {
        name: t('link.menu'),
        to: '/menu',
        isActive: route.name === 'Menu',
      },
      {
        name: 'Blog',
        to: '/blog',
        isActive: route.fullPath === '/blog',
      },
      {
        name: t('link.contact'),
        to: '/contact',
        isActive: route.fullPath === '/contact',
      },
    ];
  });

  return links;
}
