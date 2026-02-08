import Image from "next/image";

const moonGradientMask = {
    WebkitMaskImage:
        "linear-gradient(to bottom, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)",
    maskImage:
        "linear-gradient(to bottom, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)",
    WebkitMaskRepeat: "no-repeat",
    maskRepeat: "no-repeat",
    WebkitMaskSize: "100% 100%",
    maskSize: "100% 100%",
};

export default function SamuraiImage() {
    return (
        <Image
            src="/frontpage/samurai_ronin_1.webp"
            alt="Samurai"
            width={352}
            height={560}
            priority
            sizes="(max-width: 640px) 10rem, (max-width: 1280px) 16rem, 352px"
            className="w-full h-auto max-h-screen max-w-[10rem] sm:max-w-[16rem]
      2xl-only:max-w-[22rem] 3xl-only:max-w-[30rem] 4xl:max-w-lg
      -z-10 brightness-75 opacity-95"
            style={moonGradientMask}
        />
    );
}
