// src/pages/LandingPage.jsx
import config from '@/config/config';
import { formatEventDate } from '@/lib/formatEventDate';
import { motion } from 'framer-motion';
import { Calendar, Clock, Heart, Sparkles } from 'lucide-react';

const LandingPage = ({ onOpenInvitation }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="min-h-screen relative overflow-hidden bg-gradient-to-br from-rose-50 via-white to-blue-50"
  >
    {/* Enhanced Decorative Background */}
    <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-transparent to-white/60" />
    <div className="absolute top-0 right-0 w-80 h-80 md:w-[500px] md:h-[500px] bg-gradient-to-br from-rose-200/30 to-blue-200/30 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
    <div className="absolute bottom-0 left-0 w-80 h-80 md:w-[500px] md:h-[500px] bg-gradient-to-tr from-blue-200/30 to-rose-200/30 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3" />
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-pink-100/20 to-purple-100/20 rounded-full blur-2xl" />

    {/* Floating Decorative Elements */}
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
      className="absolute top-20 left-10 text-rose-300/50"
    >
      <Heart className="w-6 h-6" />
    </motion.div>
    <motion.div
      animate={{ y: [0, 10, 0] }}
      transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
      className="absolute top-32 right-16 text-blue-300/50"
    >
      <Sparkles className="w-5 h-5" />
    </motion.div>
    <motion.div
      animate={{ y: [0, -8, 0] }}
      transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
      className="absolute bottom-32 left-20 text-purple-300/50"
    >
      <Heart className="w-4 h-4" />
    </motion.div>

    {/* Main Content */}
    <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-8">
      {/* Title Section */}
      <motion.div
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-8"
      >
        <h2 className="text-lg sm:text-xl md:text-2xl font-light text-gray-600 mb-2">
          {config.data.title}
        </h2>
        <p className="text-sm sm:text-base text-gray-500 max-w-md mx-auto leading-relaxed">
          {config.data.description}
        </p>
      </motion.div>

      {/* Wedding Rings Image */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative mb-8"
      >
        <div className="w-40 h-40 sm:w-48 sm:h-48 p-2 rounded-full bg-gradient-to-br from-white via-rose-50 to-blue-50 border-2 border-white/60 shadow-2xl backdrop-blur-sm">
          <img
            src="/images/cincin.jpg"
            alt="Wedding Rings"
            className="w-full h-full object-cover rounded-full shadow-lg"
          />
        </div>
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="absolute -inset-4 rounded-full border-2 border-gradient-to-r from-rose-200 to-blue-200 opacity-30"
        />
      </motion.div>

      {/* Main Card */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="w-full max-w-lg"
      >
        <div className="backdrop-blur-md bg-white/70 p-8 sm:p-10 md:p-12 rounded-3xl border border-white/50 shadow-2xl">
          {/* Decorative Header */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
            className="flex items-center justify-center gap-4 mb-8"
          >
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-rose-300" />
            <Heart className="w-6 h-6 text-rose-400 fill-rose-400" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-blue-300" />
          </motion.div>

          {/* Date and Time Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8"
          >
            <div className="flex flex-col items-center space-y-2 bg-gradient-to-br from-blue-50 to-blue-100/50 px-6 py-4 rounded-2xl border border-blue-200/30 shadow-sm">
              <Calendar className="w-6 h-6 text-blue-500" />
              <p className="text-gray-700 font-semibold text-center">
                {formatEventDate(config.data.date)}
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 bg-gradient-to-br from-rose-50 to-rose-100/50 px-6 py-4 rounded-2xl border border-rose-200/30 shadow-sm">
              <Clock className="w-6 h-6 text-rose-500" />
              <p className="text-gray-700 font-semibold text-center">{config.data.time}</p>
            </div>
          </motion.div>

          {/* Couple Names */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
            className="text-center space-y-6 mb-8"
          >
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-gray-800 leading-tight tracking-wide">
                <span className="text-rose-500">{config.data.groomName}</span>
                <span className="text-gray-400 mx-3 text-2xl">&</span>
                <span className="text-blue-500">{config.data.brideName}</span>
              </h1>
              <div className="h-px w-32 mx-auto bg-gradient-to-r from-rose-300 via-gray-300 to-blue-300" />
              <p className="text-sm sm:text-base text-gray-600 italic">
                Bersama keluarga besar kami
              </p>
            </div>
          </motion.div>

          {/* Open Invitation Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
              whileTap={{ scale: 0.95 }}
              onClick={onOpenInvitation}
              className="group relative w-full bg-gradient-to-r from-rose-500 to-blue-500 text-white px-8 py-4 rounded-2xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10 flex items-center justify-center gap-3">
                <Sparkles className="w-5 h-5" />
                <span>Buka Undangan</span>
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  →
                </motion.span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-rose-600 to-blue-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 bg-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  </motion.div>
);

export default LandingPage;
