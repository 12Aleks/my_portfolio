import clsx from "clsx";
import { motion } from "framer-motion";
import { memo } from 'react';

const ItemLayout = ({children, className}) => {
    return (
        <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.2}}
            viewport={{ once: true }}
            className={clsx(
                className,
                "rounded-lg flex space-y-5 justify-center transition-all bg-background/20 backdrop-blur-[6px] duration-500 border border-1 border-white hover:border-amber-600"
            )}
        >
            {children}
        </motion.div>
    );
};

export default memo(ItemLayout);