"use client"
import {useLocale, useTranslations} from "next-intl";

export default function PrivacyPolicy() {
    const t = useTranslations("privacyPolicy");
    const locale = useLocale();

    return (
        <div className="h-full min-h-screen flex items-center justify-center">
            <div className="max-w-4xl my-24 mx-3 px-4 py-8 text-gray-800 bg-white rounded-lg">
                <h1 className="text-2xl font-bold mb-4 text-center">{t("title")}</h1>
                <p className="text-sm 2xl:text-lg mb-4">{t("description")}</p>

                <h2 className="text-lg 2xl:text-xl font-semibold mb-2">{t("dataCollection.title")}</h2>
                <p className="text-sm 2xl:text-lg mb-4">{t("dataCollection.description")}</p>
                <ul className="text-sm 2xl:text-lg list-disc ml-6 mb-4">
                    <li>{t("dataCollection.technicalData")}</li>
                </ul>

                <h2 className="text-lg 2xl:text-xl font-semibold mb-2">{t("dataUsage.title")}</h2>
                <p className="text-sm 2xl:text-lg mb-4">{t("dataUsage.description")}</p>
                <ul className="text-sm 2xl:text-lg list-disc ml-6 mb-4">
                    <li>{t("dataUsage.analytics")}</li>
                    <li>{t("dataUsage.improvement")}</li>
                </ul>

                <h2 className="text-lg 2xl:text-xl font-semibold mb-2">{t("cookiesUsage.title")}</h2>
                <p className="text-sm 2xl:text-lg mb-4">{t("cookiesUsage.description")}</p>

                <h2 className="text-lg 2xl:text-xl font-semibold mb-2">{t("policyChanges.title")}</h2>
                <p className="text-sm 2xl:text-lg mb-4">{t("policyChanges.description")}</p>
            </div>
        </div>
    );
}
