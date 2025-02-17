"use client"
import { NextIntlClientProvider } from 'next-intl';
// import { useLocale } from 'next-intl';
import { notFound } from 'next/navigation';

export default function I18nProvider({ locale, children }) {
    // const currentLocale = useLocale();

    // Проверяем, что локаль поддерживается
    if (!['en', 'ru', 'pl', 'de', 'ua'].includes(locale)) {
        notFound();
    }

    return (
        <NextIntlClientProvider
            locale={locale}
            messages={require(`../../messages/${locale}.json`)}
            timeZone="Europe/Warsaw"
        >
            {children}
        </NextIntlClientProvider>
    );
}
