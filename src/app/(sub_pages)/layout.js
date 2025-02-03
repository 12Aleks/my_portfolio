import Image from "next/image";
import bg from "../../../public/background/japan_castel.jpg";
import React from "react";
import ToHomeBtn from "@/components/navigation/ToHomeBtn";



export default function SubPagesLayout({children}) {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center py-20 px-16 relative">
            <ToHomeBtn/>
            {children}
        </main>
    );
}
