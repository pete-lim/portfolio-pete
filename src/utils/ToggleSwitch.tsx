import { motion } from 'framer-motion';
import type { Dispatch, SetStateAction } from 'react';

interface Props {
  isDark: boolean;
  setIsDark: Dispatch<SetStateAction<boolean>>;
}

export default function FancyToggle({ isDark, setIsDark }: Props) {
  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className={`absolute top-8 lg:top-7 lg:right-8 max-lg:left-8 cursor-pointer z-50 w-14 h-7 
      rounded-full p-1 flex items-center
      ${isDark ? 'bg-indigo-600' : 'bg-accent'}`}
    >
      <motion.div
        animate={{ x: isDark ? 28 : 0 }}
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 20,
        }}
        className="w-5 h-5 bg-white rounded-full shadow"
      />
    </button>
  );
}
