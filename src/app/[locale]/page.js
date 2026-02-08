import Image from "next/image";
import SocialButton from "@/components/navigation/SocialButton";
import { Links } from "@/app/data";
import MainContent from "@/components/home/MainContent";
import SamuraiImage from "@/components/home/SamuraiImage";
import MoonScene from "@/components/home/MoonScene";

export default function Home() {
    const leftLinks = Links?.slice(0, 2) ?? [];
    const rightLinks = Links?.slice(2, 4) ?? [];

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

                    <div className="absolute w-full left-1/2 top-1/2 transform -translate-x-1/2
                    -translate-y-1/2 flex justify-between xl:hidden">
                        <div className="flex flex-col gap-4 sm:gap-6 m-3">
                            {leftLinks.map((data) => (
                                <SocialButton key={data.label} {...data} />
                            ))}
                        </div>
                        <div className="flex flex-col gap-4 sm:gap-6 m-3">
                            {rightLinks.map((data) => (
                                <SocialButton key={data.label} {...data} />
                            ))}
                        </div>
                    </div>

                    <div className="w-full xl:w-1/2 h-full flex flex-col items-center justify-center
                     absolute xl:relative -z-10">
                        <SamuraiImage />

                        <MoonScene />
                    </div>
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