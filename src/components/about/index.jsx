import clsx from "clsx";
import Image from "next/image";
import drupal_icon from '../../../public/drupal_icon.png'

const ItemLayout = ({children, className}) => {
    return (
        <div
            className={clsx(
                className,
                "rounded-lg flex space-y-5 justify-center transition-all bg-background/20 backdrop-blur-[6px] duration-500 border border-1 border-white hover:border-amber-600"
            )}
        >
            {children}
        </div>
    );
};

const AboutBlocks = () => {
    return (
        <section className="xl:py-10 2xl:py-20 w-full ">
            <div className="max-w-7xl mx-auto grid grid-cols-12 gap-4 xs:gap-6 md:gap-8 text-white px-4">
                <ItemLayout className="col-span-12 md:col-span-8 flex-col px-10 py-7">
                    <h2 className="text-white text-2xl mb-3">Ogólna informacja:</h2>
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

                <ItemLayout className="col-span-12 md:col-span-4 flex-col items-center px-5 py-7">
                    <h2 className="text-5xl font-bold text-amber-600">8+ lat</h2>
                    <p className="text-2xl font-light">doświadczenia w branży IT.</p>
                </ItemLayout>

                <ItemLayout className="col-span-12 md:col-span-4 flex-col items-center px-10 py-7">
                    <img
                        src="https://github-readme-stats.vercel.app/api/top-langs?username=12Aleks&show_icons=true&hide=php&theme=transparent&hide_border=true&title_color=d97706&text_color=ffffff&icon_color=b45309&text_bold=false"
                        alt="github status"
                        loading="lazy"
                        className="w-full h-auto"
                    />
                </ItemLayout>

                <ItemLayout className="col-span-12 md:col-span-8 flex-col items-center px-10 py-7">
                    <img
                        src="https://github-readme-stats.vercel.app/api?username=12Aleks&show_icons=true&theme=transparent&hide_border=true&title_color=d97706&text_color=ffffff&icon_color=b45309&text_bold=false"
                        alt="github status"
                        loading="lazy"
                        className="w-full h-auto"
                    />
                </ItemLayout>
                <ItemLayout className="col-span-12 flex-col px-10 py-7">
                    <h2 className="text-white text-2xl mb-3">CMS:</h2>
                    <div className="flex items-center gap-10">
                        <Image src={drupal_icon} alt="drupal icon" loading="lazy" width={100} height={100} />
                        <p className="font-light leading-normal">
                            Przez wiele lat pracowałem z systemem CMS Drupal, zdobywając doświadczenie w tworzeniu i dostosowywaniu stron internetowych. Pracowałem z różnymi wersjami Drupala (od 7 do 10), co pozwoliło mi opanować zarówno budowanie niestandardowych motywów i modułów, jak i zarządzanie treścią. Dzięki elastyczności Drupala mogłem realizować projekty o różnym stopniu złożoności, dostosowując je do unikalnych potrzeb klientów.
                        </p>
                    </div>

                </ItemLayout>
                <ItemLayout className="col-span-12 flex-col px-10 py-7">
                    <h2 className="text-white text-2xl mb-3">Pracowałem z:</h2>
                    <img
                        src="https://skillicons.dev/icons?i=js,ts,jquery,nextjs,nestjs,react,redux,threejs,html,css,sass,tailwind,bootstrap,prisma,postman,npm,heroku,vercel,github,webstorm,windows)](https://skillicons.dev"
                        alt="github status"
                        loading="lazy"
                        className="w-full h-auto"
                    />
                </ItemLayout>
                <ItemLayout className="col-span-12 flex-col px-10 py-7">
                    <h2 className="text-white text-2xl mb-3">Znajomość języków:</h2>
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
