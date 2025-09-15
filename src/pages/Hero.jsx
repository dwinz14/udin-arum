import { Calendar, Clock, Heart, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import config from "@/config/config";
import { formatEventDate } from "@/lib/formatEventDate";
import { safeBase64 } from "@/lib/base64";

export default function Hero() {
  const [guestName, setGuestName] = useState("");

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const guestParam = urlParams.get("guest");

  }, []);

  // --- Countdown Timer Component (Optimized) ---
  const CountdownTimer = ({ targetDate }) => {
    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date();
      let timeLeft = {};
      if (difference > 0) {
        timeLeft = {
          Hari: Math.floor(difference / (1000 * 60 * 60 * 24)),
          Jam: Math.floor((difference / (1000 * 60 * 60)) % 24),
          Menit: Math.floor((difference / 1000 / 60) % 60),
          Detik: Math.floor((difference / 1000) % 60),
        };
      }
      return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
      const timer = setTimeout(() => {
        setTimeLeft(calculateTimeLeft());
      }, 1000);
      return () => clearTimeout(timer);
    });

    const timerComponents = Object.keys(timeLeft).map((interval) => (
      <div
        key={interval}
        className="flex flex-col items-center justify-center bg-white/50 p-3 rounded-lg shadow-sm w-full"
      >
        <span className="text-2xl sm:text-3xl font-semibold text-slate-700">
          {timeLeft[interval] || 0}
        </span>
        <span className="text-xs text-slate-500 uppercase">{interval}</span>
      </div>
    ));

    return (
      <div className="grid grid-cols-4 gap-2 sm:gap-4 text-center mt-6">
        {Object.keys(timeLeft).length ? (
          timerComponents
        ) : (
          <span className="col-span-4 text-slate-600">
            Acara telah berlangsung.
          </span>
        )}
      </div>
    );
  };

  // --- Floating Hearts Component (Warmer Palette) ---
  const FloatingHearts = () => {
    const heartColors = ["text-rose-300", "text-amber-200", "text-slate-300"];
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: "110vh", x: `${Math.random() * 100}vw`, opacity: 0 }}
            animate={{ y: "-10vh", opacity: [0, 0.8, 0] }}
            transition={{
              duration: Math.random() * 3 + 4,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "linear",
            }}
            className="absolute"
          >
            <Heart
              className={`w-8 h-8 sm:w-10 sm:h-10 ${heartColors[i % heartColors.length]}`}
              fill="currentColor"
            />
          </motion.div>
        ))}
      </div>
    );
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 py-24 text-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/bg-1.jpg')" }}
    >
      {/* [IMPROVEMENT] Lighter overlay to enhance the bright outdoor background */}
      <div className="absolute inset-0 bg-white/60 backdrop-blur-lg"></div>
      <FloatingHearts />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.3, delayChildren: 0.2 },
          },
        }}
        className="relative z-10 flex flex-col items-center w-full max-w-3xl space-y-6"
      >
        {/* --- Content Asli Anda, ditata ulang dalam layout yang lebih baik --- */}
        <motion.div
          variants={{
            hidden: { y: 20, opacity: 0 },
            visible: { y: 0, opacity: 1 },
          }}
        >
          <span className="px-4 py-1 text-sm bg-slate-100 text-blue-700 rounded-full border border-slate-200">
            بِسْــــــــــــــــــمِ اللهِ الرَّحْمَنِ الرَّحِيْم
          </span>
        </motion.div>

        <motion.p
          variants={{
            hidden: { y: 20, opacity: 0 },
            visible: { y: 0, opacity: 1 },
          }}
          className="text-slate-600 font-light italic text-base sm:text-lg max-w-xl"
        >
          Maha Suci Allah SWT dengan segala Kebesaran-Nya yang telah menciptakan
          makhluk-Nya berpasang-pasangan, melalui pesan ini kami ingin
          menyampaikan kabar bahagia atas pernikahan kami :
        </motion.p>

        {/* --- Groom Details --- */}
        <div className="w-full flex flex-col items-center">
          <motion.h2
            variants={{
              hidden: { scale: 0.8, opacity: 0 },
              visible: { scale: 1, opacity: 1 },
            }}
            className="text-4xl sm:text-6xl font-serif text-transparent bg-clip-text bg-gradient-to-br from-slate-800 to-blue-600 drop-shadow-sm"
          >
            Arifuddin Sirojul Firdaus
          </motion.h2>
          <motion.div
            variants={{
              hidden: { y: 10, opacity: 0 },
              visible: { y: 0, opacity: 1 },
            }}
            className="mt-2 text-center"
          >
            <div className="text-sm sm:text-base text-slate-600 font-medium">
              Putra dari
            </div>
            <div className="text-lg sm:text-xl font-serif text-slate-800">
              {config.data.parentGroom}
            </div>
          </motion.div>
        </div>

        <motion.h2
          variants={{
            hidden: { scale: 0.5, opacity: 0 },
            visible: { scale: 1, opacity: 1 },
          }}
          className="text-3xl sm:text-5xl font-serif text-slate-500"
        >
          &
        </motion.h2>

        {/* --- Bride Details --- */}
        <div className="w-full flex flex-col items-center">
          <motion.h2
            variants={{
              hidden: { scale: 0.8, opacity: 0 },
              visible: { scale: 1, opacity: 1 },
            }}
            className="text-4xl sm:text-6xl font-serif text-transparent bg-clip-text bg-gradient-to-br from-slate-800 to-blue-600 drop-shadow-sm"
          >
            Annisa Dea Rismaya
          </motion.h2>
          <motion.div
            variants={{
              hidden: { y: 10, opacity: 0 },
              visible: { y: 0, opacity: 1 },
            }}
            className="mt-1 text-center"
          >
            <div className="text-sm sm:text-base text-slate-600 font-medium">
              Putri dari
            </div>
            <div className="text-lg sm:text-xl font-serif text-slate-800">
              {config.data.parentBride}
            </div>
          </motion.div>
        </div>

        {/* --- Event Details Card --- */}
        <motion.div
          variants={{
            hidden: { y: 20, opacity: 0 },
            visible: { y: 0, opacity: 1 },
          }}
          transition={{ delay: 0.5 }}
          className="w-full max-w-md bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl mt-10 p-6 sm:p-8 border border-white/50"
        >
          <div className="text-center mb-2">
            <p className="text-sm text-slate-500 mb-1">
              InsyaAllah akan diselenggarakan pada :
            </p>
            <p className="text-lg font-semibold text-slate-800 tracking-wider">
              {formatEventDate(config.data.date, "full")}
            </p>
            <p className="text-lg font-semibold text-slate-800 tracking-wider">
              {config.data.time}
            </p>
          </div>
          <div className="w-full h-px bg-slate-300/70 mb-6"></div>
          <CountdownTimer targetDate={config.data.date} />
        </motion.div>
      </motion.div>

      {/* --- Scroll Down Indicator --- */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-8 h-8 text-slate-700/80" />
        </motion.div>
      </motion.div>
    </section>
  );

                                    //   <motion.div
                                    //     initial={{ opacity: 0 }}
                                    //     animate={{ opacity: 1 }}
                                    //     transition={{ delay: 0.9 }}
                                    //     className="flex items-center justify-center space-x-2"
                                    // >
                                    //     <Calendar className="w-4 h-4 text-blue-400" />
                                    //     <span className="text-gray-700 font-medium text-sm sm:text-base">
                                    //         {formatEventDate(config.data.date, "full")}
                                    //     </span>
                                    // </motion.div>

                                    // <motion.div
                                    //     initial={{ opacity: 0 }}
                                    //     animate={{ opacity: 1 }}
                                    //     transition={{ delay: 1 }}
                                    //     className="flex items-center justify-center space-x-2"
                                    // >
                                    //     <Clock className="w-4 h-4 text-blue-400" />
                                    //     <span className="text-gray-700 font-medium text-sm sm:text-base">
                                    //         {config.data.time}
                                    //     </span>
                                    // </motion.div>
}
