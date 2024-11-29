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
        name: t('link.menu'),
        to: '#menu',
        isActive: route.hash === 'menu',
      },
      {
        name: t('link.contact'),
        to: '#contact',
        isActive: route.hash === 'contact',
      },
    ];
  });

  return links;
}
