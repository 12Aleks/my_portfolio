import Image from "next/image";
import MainContent from "@/components/home/MainContent";
import HomeClient from "@/components/home/HomeClient";


export default function Home() {
    return (
        <div className="relative w-full flex flex-col items-center justify-center overflow-hidden">

            <Image
                src="/background/japan_castle_1.webp"
                alt="background"
                fill
                sizes="100vw"
                priority={false}
                loading="lazy"
                quality={60}
                className="fixed object-cover top-0 left-0 w-full max-h-screen -z-10 blur-sm
                    [mask-image:linear-gradient(to_top,transparent_10%,rgba(0,0,0,0.5)_50%,black_80%)] opacity-10"
            />

            <section className="relative w-full h-screen overflow-hidden text-white font-sans"
                     aria-labelledby="frontpage-title">

                <div className="w-full 3xl:w-5/6 4xl:w-3/4 min-h-screen mx-auto flex flex-row items-end
                 xl:items-center justify-between px-3 lg:px-6 py-12 sm:py-16 lg:py-20 gap-10">

                    <MainContent />

                    <HomeClient />
                </div>
            </section>

            <Image
                src="/frontpage/abstract-red-background-left.webp"
                alt="background"
                width={800}
                height={500}
                loading="lazy"
                className="hidden 3xl:block fixed left-0 -bottom-5 z-[-100] brightness-50
                opacity-50 h-auto w-[550px] 4xl:w-[800px]"
            />
            <Image
                src="/frontpage/abstract-red-background-right.webp"
                alt="background"
                loading="lazy"
                width={800}
                height={500}
                className="hidden 3xl:block fixed right-0 -bottom-5 z-[-100] brightness-50
                opacity-50 h-auto w-[550px] 4xl:w-[800px]"
            />
        </div>
    );
}