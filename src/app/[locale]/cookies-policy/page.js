"use client"
import Link from "next/link";
import {useLocale, useTranslations} from "next-intl";

export default function CookiesPolicy() {
    const t = useTranslations('cookiesPolicy');
    const locale = useLocale();
    return (
        <div className="h-full min-h-screen flex items-center justify-center">
            <div className="max-w-4xl my-24 mx-3 px-4 py-8 text-gray-800 bg-white rounded-lg">
                <h1 className="text-2xl font-bold mb-4 text-center">{t('title')}</h1>
                <p className="mb-4 text-sm 2xl:text-lg">
                    {t('description')}
                </p>
                <h2 className="text-lg 2xl:text-xl font-semibold mb-2">{t('types.title')}</h2>
                <ul className="list-disc ml-6 mb-4 text-sm 2xl:text-lg">
                    <li>{t('types.necessary')}</li>
                    <li>{t('types.analytics')}</li>
                    <li>{t('types.preferences')}</li>
                    <li>{t('types.marketing')}</li>
                </ul>
                <h2 className="text-lg 2xl:text-xl font-semibold mb-2">{t('management.title')}</h2>
                <p className="mb-4 text-sm 2xl:text-lg">
                    {t('management.description')}
                </p>
                <p className="mb-4 text-sm 2xl:text-lg">
                    {t('moreInfo')}{" "}
                    <Link href={`/${locale}/privacy-policy`} className="text-blue-500">
                        {t('privacyPolicyLink')}
                    </Link>.
                </p>
            </div>
        </div>
    );
}
