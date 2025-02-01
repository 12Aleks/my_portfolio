import Image from "next/image";
import bg from "../../public/background/scale_1200.png"
import RenderModel from "@/components/RenderModel";

import TreeModel from "@/components/model/TreeModel";
import Navigation from "@/components/navigation";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between relative">
            <Image src={bg} alt="background" fill className="w-full h-full object-cover object-center opacity-10"/>

            <div className="w-full h-screen">
                <Navigation />
                <RenderModel>
                    {/*<WorldModel/>*/}
                    <TreeModel  />
                </RenderModel>
            </div>
        </main>
    );
}
