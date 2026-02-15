"use client";
import { motion } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";
import { useRef, useState } from "react";

const Sound = () => {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [loaded, setLoaded] = useState(false);

    const toggle = async () => {
        const newState = !isPlaying;
        setIsPlaying(newState);

        if (!loaded && audioRef.current) {
            // отложенно назначаем src, чтобы предотвратить раннюю загрузку файла
            audioRef.current.src = "/audio/Ancient Traditional Japanese Music - Mountain Pass.mp3";
            setLoaded(true);
        }

        if (audioRef.current) {
            audioRef.current.volume = 0.5;

            if (newState) {
                await audioRef.current.play().catch(() => {
                    // autoplay blocked
                });
            } else {
                audioRef.current.pause();
            }
        }
    };

    return (
        <div className="fixed top-20 right-3 xs:right-4 xl:right-7 z-30 group">
            <audio ref={audioRef} loop preload="none" />
            <motion.button
                onClick={toggle}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1 }}
                whileTap={{ scale: 0.9 }}
                aria-pressed={isPlaying}
                aria-label={isPlaying ? "Mute sound" : "Enable sound"}
                className="relative
                 w-11 h-11 3xl:w-14 3xl:h-14
                 p-2 3xl:p-3
                 rounded-full
                 bg-background/20 backdrop-blur-md
                 transition-all duration-300
                 hover:p-3.5
                 cursor-pointer
                 border border-neutral-400
                 hover:border-amber-600
                 [&_svg]:text-neutral-400
                 [&_svg]:group-hover:text-amber-600"
            >
                {isPlaying ?
                    <Volume2 className="w-full h-full" strokeWidth={1.5}/> :
                    <VolumeX className="w-full h-full" strokeWidth={1.5}/>
                }
            </motion.button>
        </div>
    );
};

export default Sound;
