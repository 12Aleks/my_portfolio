import Image from "next/image";
import drupal_icon from '../../../public/drupal.webp'
import ItemLayout from "@/components/about/ItemLayout";

const AboutBlocks = () => {
    return (
        <section className="py-0 2xl:py-5 3xl:py-20 w-full">
            <div className="max-w-7xl mx-auto grid grid-cols-12 gap-4 xs:gap-6 md:gap-8 text-white px-0 sm:px-0 md:px-0 xl:px-4">
                <ItemLayout className="col-span-12 md:col-span-8 flex-col px-5 py-4 sm:px-5 sm:py-4 md:px-6 md:py-5 lg:px-10 lg:py-7">
                    <h2 className="text-white text-2xl mb-2 sm:mb-3">Ogólna informacja:</h2>
                    <p className="font-light leading-normal">
                        Jestem Full Stack Developerem (lub Front-End Developerem) na poziomie mid, z solidnym
                        doświadczeniem w technologiach takich jak <span
                        className="font-medium">JavaScript, SCSS i HTML</span>.
                        Pracowałem również z <span
                        className="font-medium">TypeScript, React, Next.js, Nest.js</span> oraz
                        <span className="font-medium"> Tailwind CSS</span>. Mam praktyczne doświadczenie w pracy z
                        systemami CMS,
                        w tym z <span className="font-medium">Drupala (wersje 7-10)</span> oraz częściowo z WordPressem.
                        Łączę umiejętności programowania z wiedzą o UX/UI, co pozwala mi tworzyć intuicyjne, estetyczne
                        i wydajne
                        strony internetowe oraz aplikacje.
                    </p>
                </ItemLayout>

                <ItemLayout className="col-span-12 md:col-span-4 flex-col items-center px-5 py-4 sm:px-5 sm:py-4 md:px-6 md:py-5 lg:px-10 lg:py-7">
                    <h2 className="text-4xl md:text-4xl lg:text-5xl font-bold text-amber-600">8+ lat</h2>
                    <p className="md:text-xl lg:text-2xl font-light text-center">doświadczenia w branży IT.</p>
                </ItemLayout>

                <ItemLayout className="col-span-12 md:col-span-4 flex-col items-center px-0 py-0 sm:px-0 sm:py-0 md:px-1 md:py-1 lg:px-3 lg:py-3">
                    <img
                        src="https://github-readme-stats.vercel.app/api/top-langs?username=12Aleks&show_icons=true&hide=php&theme=transparent&hide_border=true&title_color=d97706&text_color=ffffff&icon_color=b45309&text_bold=false&locale=pl"
                        alt="github status"
                        loading="lazy"
                        className="w-full h-auto"
                    />
                </ItemLayout>

                <ItemLayout className="col-span-12 md:col-span-8 flex-col items-center px-0 py-3 sm:px-1 sm:py-3 md:px-1 md:py-3 lg:px-2 lg:py-3">
                    <img
                        src="https://github-readme-stats.vercel.app/api?username=12Aleks&show_icons=true&theme=transparent&hide_border=true&title_color=d97706&text_color=ffffff&icon_color=b45309&text_bold=false&locale=pl"
                        alt="github status"
                        loading="lazy"
                        className="w-full h-auto"
                    />
                </ItemLayout>
                <ItemLayout className="col-span-12 flex-col px-5 py-4 sm:px-5 sm:py-4 md:px-6 md:py-5 lg:px-10 lg:py-7">
                    <h2 className="text-white text-2xl mb-2 sm:mb-3">CMS:</h2>
                    <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row  items-center gap-10">
                        <Image src={drupal_icon} alt="drupal icon" loading="lazy" width={100} height={100} />
                        <p className="font-light leading-normal">
                            Przez wiele lat pracowałem z systemem CMS Drupal, zdobywając doświadczenie w tworzeniu i dostosowywaniu stron internetowych. Pracowałem z różnymi wersjami Drupala (od 7 do 10), co pozwoliło mi opanować zarówno budowanie niestandardowych motywów i modułów, jak i zarządzanie treścią. Dzięki elastyczności Drupala mogłem realizować projekty o różnym stopniu złożoności, dostosowując je do unikalnych potrzeb klientów.
                        </p>
                    </div>

                </ItemLayout>
                <ItemLayout className="col-span-12 flex-col px-5 py-4 sm:px-5 sm:py-4 md:px-6 md:py-5 lg:px-10 lg:py-7">
                    <h2 className="text-white text-2xl mb-2 sm:mb-3">Pracowałem z:</h2>
                    <img
                        src="https://skillicons.dev/icons?i=js,ts,jquery,nextjs,nestjs,react,redux,threejs,html,css,sass,tailwind,bootstrap,prisma,postman,npm,heroku,vercel,github,webstorm,windows)](https://skillicons.dev"
                        alt="github status"
                        loading="lazy"
                        className="w-full h-auto"
                    />
                </ItemLayout>
                <ItemLayout className="col-span-12 flex-col px-5 py-4 sm:px-5 sm:py-4 md:px-6 md:py-5 lg:px-10 lg:py-7">
                    <h2 className="text-white text-2xl mb-2 sm:mb-3">Znajomość języków:</h2>
                    <ul className="space-y-4">
                        <li className="flex">Polski <div className="self-end flex-1 mx-2 mb-1 bg-transparent border-b border-dashed border-muted" /> zaawansowany</li>
                        <li className="flex">Angielski <div className="self-end flex-1 mx-2 mb-1 bg-transparent border-b border-dashed border-muted" /> podstawowy</li>
                        <li className="flex">Rosyjski <div className="self-end flex-1 mx-2 mb-1 bg-transparent border-b border-dashed border-muted" /> ojczysty</li>
                        <li className="flex">Ukraiński <div className="self-end flex-1 mx-2 mb-1 bg-transparent border-b border-dashed border-muted" /> ojczysty</li>
                    </ul>
                </ItemLayout>
            </div>
        </section>
    );
};

export default AboutBlocks;
