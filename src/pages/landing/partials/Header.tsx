import { motion } from "motion/react";

const Header = () => {
  return (
    <div className="relative min-h-screen grid grid-cols-1 md:grid-cols-2 items-center bg-linear-to-br from-orange-800 via-red-800 to-amber-500 overflow-hidden px-4 md:px-40">
      {/* decorative blob */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-amber-500/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-red-900/30 rounded-full blur-3xl pointer-events-none" />

      {/* text */}
      <motion.div
        className="flex flex-col gap-4 z-10 w-full"
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span className="text-white/80 font-medium tracking-widest text-sm uppercase">
          Asli Gurih, Bikin Nagih
        </span>
        <h1 className="text-white font-extrabold text-5xl md:text-7xl leading-tight drop-shadow-md">
          Tahu Kocek
          <br />
          <span className="text-yellow-200">Merona</span>
        </h1>
        <p className="text-white/90 text-lg md:text-xl max-w-lg leading-relaxed">
          Perpaduan tahu lembut, sambal bawang segar, dan sensasi rasa yang
          bikin kamu balik lagi terus.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="mt-4 w-fit bg-white text-orange-500 font-bold px-8 py-3 rounded-full shadow-lg hover:bg-yellow-50 transition-colors"
        >
          Lihat Menu →
        </motion.button>
      </motion.div>

      {/* image */}
      <motion.div
        className="flex justify-center z-10 mt-10 md:mt-0"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <img
          src="/images/tahu-kocek-merona.png"
          alt="Tahu Kocek Merona"
          className="w-72 md:w-140 drop-shadow-2xl object-contain"
        />
      </motion.div>
    </div>
  );
};

export default Header;
