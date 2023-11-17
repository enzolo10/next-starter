import { getRequestConfig } from 'next-intl/server';

export const locales = ['en', 'zh-hant'];

export default getRequestConfig(async ({ locale }) => ({
  messages: (await import(`@/i18n/${locale}.json`)).default,
}));
