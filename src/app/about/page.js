import Image from "next/image";
import bg from "../../../public/background/japan_castel.jpg";

const AboutPage = () => {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between relative ">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-slate-700 to-gray-950 opacity-30">
                <Image src={bg} alt="background" fill className="object-cover object-top opacity-35"/>
            </div>
            
        </main>
    );
};

export default AboutPage;