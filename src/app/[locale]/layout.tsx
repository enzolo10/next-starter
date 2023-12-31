import { PropsWithChildren } from 'react';
// import { Inter as FontSans } from 'next/font/google';
import { notFound } from 'next/navigation';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import Providers from '@/components/Providers';
import { cn } from '@/lib/utils';
import '@/app/globals.css';
import { PageProps } from '@/types/common';
import { locales } from '../../i18n';

// export const fontSans = FontSans({
//   subsets: ['latin'],
//   variable: '--font-sans',
// });

type ParamsProps = {
  locale: string;
};

const LocaleLayout = ({ params, children }: PropsWithChildren<PageProps<ParamsProps>>) => {
  if (!locales.includes(params.locale)) notFound();

  // Enable static rendering
  unstable_setRequestLocale(params.locale);

  return (
    <html lang={params.locale}>
      <body className={cn('min-h-screen bg-background font-sans antialiased scrollbar')}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
};

export const generateMetadata = async ({ params: { locale } }: PageProps<ParamsProps>) => {
  const t = await getTranslations({ locale, namespace: 'Index' });

  return {
    title: t('title'),
    description: 'Generated by create next app',
  };
};

export const generateStaticParams = () => {
  return locales.map((locale) => ({ locale }));
};

export default LocaleLayout;
