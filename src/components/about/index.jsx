"use client"
import Image from "next/image";
import Link from "next/link";
import drupal_icon from '../../../public/drupal.webp'
import ItemLayout from "@/components/about/ItemLayout";
import {useLocale, useTranslations} from "next-intl";

const AboutBlocks = () => {
    const t = useTranslations("about");
    const local = useLocale()
    return (
        <section className="py-0 2xl:py-5 3xl:py-20 w-full">
            <div className="max-w-7xl mx-auto grid grid-cols-12 gap-4 xs:gap-6 md:gap-8 text-white px-0 sm:px-0 md:px-0 xl:px-4">
                <ItemLayout className="col-span-12 md:col-span-8 flex-col px-5 py-4 sm:px-5 sm:py-4 md:px-6 md:py-5 lg:px-10 lg:py-7">
                    <h2 className="text-white text-2xl mb-2 sm:mb-3">{t('first.title')}:</h2>
                    <p className="font-light leading-normal">
                        {t('first.description')}
                    </p>
                </ItemLayout>

                <ItemLayout className="col-span-12 md:col-span-4 flex-col items-center px-5 py-4 sm:px-5 sm:py-4 md:px-6 md:py-5 lg:px-10 lg:py-7">
                    <h2 className="text-4xl md:text-4xl lg:text-5xl font-bold text-amber-600">7+ {t('second.title')}</h2>
                    <p className="md:text-xl lg:text-2xl font-light text-center"> {t('second.description')}</p>
                </ItemLayout>

                <ItemLayout className="col-span-12 md:col-span-4 flex-col items-center px-0 py-0 sm:px-0 sm:py-0 md:px-1 md:py-1 lg:px-3 lg:py-3">
                    <img
                        src={`https://github-readme-stats.vercel.app/api/top-langs?username=12Aleks&show_icons=true&hide=php&theme=transparent&hide_border=true&title_color=d97706&text_color=ffffff&icon_color=b45309&text_bold=false&locale=${local !== 'ua'? local : 'en'}`}
                        alt="github status"
                        loading="lazy"
                        className="w-full h-auto"
                        width="369"
                        height="350"
                    />
                </ItemLayout>

                <ItemLayout className="col-span-12 md:col-span-8 flex-col items-center px-0 py-3 sm:px-1 sm:py-3 md:px-1 md:py-3 lg:px-2 lg:py-3">
                    <img
                        src={`https://github-readme-stats.vercel.app/api?username=12Aleks&show_icons=true&theme=transparent&hide_border=true&title_color=d97706&text_color=ffffff&icon_color=b45309&text_bold=false&locale=${local !== 'ua'? local : 'en'}`}
                        alt="github status"
                        loading="lazy"
                        className="w-full h-auto"
                        width="804"
                        height="335"
                    />
                </ItemLayout>
                <ItemLayout className="col-span-12 flex-col px-5 py-4 sm:px-5 sm:py-4 md:px-6 md:py-5 lg:px-10 lg:py-7">
                    <h2 className="text-white text-2xl mb-2 sm:mb-3">CMS:</h2>
                    <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row  items-center gap-10">
                        <Image src={drupal_icon} alt="drupal icon" loading="lazy" width={100} height={145} />
                        <p className="font-light leading-normal">
                            {t('three.description')}
                        </p>
                    </div>

                </ItemLayout>
                <ItemLayout className="col-span-12 flex-col px-5 py-4 sm:px-5 sm:py-4 md:px-6 md:py-5 lg:px-10 lg:py-7">
                    <h2 className="text-white text-2xl mb-2 sm:mb-3">{t('four.title')}:</h2>
                    <img
                        src="https://skillicons.dev/icons?i=js,ts,jquery,nextjs,nestjs,react,redux,threejs,html,css,sass,tailwind,bootstrap,prisma,postman,npm,heroku,vercel,github,webstorm,windows)](https://skillicons.dev"
                        alt="github status"
                        loading="lazy"
                        className="w-full h-auto"
                        width="1166"
                        height="145"
                    />
                </ItemLayout>
                <ItemLayout className="col-span-12 flex-col px-5 py-4 sm:px-5 sm:py-4 md:px-6 md:py-5 lg:px-10 lg:py-7">
                    <h2 className="text-white text-2xl mb-2 sm:mb-3">{t('five.title')}:</h2>
                    <ul className="space-y-4">
                        <li className="flex">{t('five.pol')} <div className="self-end flex-1 mx-2 mb-1 bg-transparent border-b border-dashed border-muted" /> {t('five.levelPol')}</li>
                        <li className="flex">{t('five.eng')} <div className="self-end flex-1 mx-2 mb-1 bg-transparent border-b border-dashed border-muted" /> {t('five.levelEng')}</li>
                        <li className="flex">{t('five.rus')} <div className="self-end flex-1 mx-2 mb-1 bg-transparent border-b border-dashed border-muted" /> {t('five.levelRus')}</li>
                        <li className="flex">{t('five.ukr')} <div className="self-end flex-1 mx-2 mb-1 bg-transparent border-b border-dashed border-muted" /> {t('five.levelUkr')}</li>
                    </ul>
                </ItemLayout>
                <ItemLayout className="col-span-12 flex-col px-5 py-4 sm:px-5 sm:py-4 md:px-6 md:py-5 lg:px-10 lg:py-7">
                    <Link href="https://www.codewars.com/users/12Aleks" target="_blank" rel="noopener noreferrer">
                        <h2 className="text-white text-2xl mb-4 sm:mb-5">Codewars:</h2>
                        <img
                            src="https://www.codewars.com/users/12Aleks/badges/large"
                            alt="Codewars Profile Badge"
                            width="500"
                            height="100"
                        />
                    </Link>
                </ItemLayout>
            </div>
        </section>
    );
};

export default AboutBlocks;
