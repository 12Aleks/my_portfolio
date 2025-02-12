"use client";
import { motion } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";
import { useRef, useState } from "react";

const Sound = () => {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const toggle = () => {
        const newState = !isPlaying;
        setIsPlaying(newState);

        if (audioRef.current) {
            audioRef.current.volume = 0.5; // Ограничиваем громкость до 50%

            if (newState) {
                audioRef.current.play().catch((error) => {
                    console.warn("Automatyczne odtwarzanie dźwięku zablokowane przez przeglądarkę:", error);
                });
            } else {
                audioRef.current.pause();
            }
        }
    };

    return (
        <div className="fixed top-20 right-3 xs:right-4 xl:right-7 2xl:right-7 3xl:right-7 z-30 group">
            <audio ref={audioRef} loop>
                <source src={"/audio/Ancient Traditional Japanese Music - Mountain Pass.mp3"} type="audio/mpeg" />
                Twoja przeglądarka nie obsługuje elementu audio!
            </audio>

            <motion.button
                onClick={toggle}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1 }}
                className="relative w-11 h-11 sm:w-11 sm:h-11 3xl:w-14 3xl:h-14 p-2 sm:p-2 3xl:p-3 transition-all
                 bg-background/20 backdrop-blur-[6px] rounded-full
                 duration-500 hover:p-3.5 hover:text-amber-600
                 group-hover:pause
                   border-1 border-neutral-400 text-neutral-400 hover:border-amber-600 border"
                aria-label="Sound control button"
            >
                {isPlaying ? (
                    <Volume2 className="w-full h-full text-neutral-400 hover:text-amber-600 group-hover:text-amber-600" strokeWidth={1.5} />
                ) : (
                    <VolumeX className="w-full h-full text-neutral-400 hover:text-amber-600 group-hover:text-amber-600" strokeWidth={1.5} />
                )}
            </motion.button>
        </div>
    );
};

export default Sound;
