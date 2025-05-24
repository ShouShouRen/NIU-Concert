import Marquee from "react-fast-marquee";
import sponsors from "./data/data";
import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const App = () => {
  const data = sponsors;
  const cardContainerRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  const titleVariants = {
    hidden: { opacity: 0, scale: 0.7, y: -40 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 20,
        duration: 1.2,
        delay: 0.2,
      },
    },
  };
  const subtitleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.8 } },
  };
  const infoListVariants = {
    visible: { transition: { staggerChildren: 0.15, delayChildren: 1.1 } },
  };
  const infoItemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };
  const thanksVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 1.5 } },
  };
  const marqueeVariants = {
    hidden: { opacity: 0, x: 60 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, delay: 2 + i * 0.3 },
    }),
  };
  const cardListVariants = {
    visible: { transition: { staggerChildren: 0.12, delayChildren: 2.6 } },
  };
  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "tween", duration: 0.7 },
    },
  };
  const footerVariants = {
    visible: { transition: { staggerChildren: 0.2, delayChildren: 3.5 } },
  };
  const footerItemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      <AnimatePresence>
        {loading && (
          <motion.div
            key="loader"
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#f5ecd7]"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
              className="mb-6"
            >
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                <circle
                  cx="30"
                  cy="30"
                  r="24"
                  stroke="#b91c1c"
                  strokeWidth="6"
                  strokeDasharray="90 60"
                />
              </svg>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-2xl font-bold text-[#b91c1c] tracking-widest"
              style={{ fontFamily: "Noto Serif TC, serif" }}
            >
              載入中...
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {!loading && (
        <div className="relative min-h-screen overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/rice-paper.png')] opacity-70 z-0 pointer-events-none" />
          <div className="absolute top-0 left-0 w-64 h-64 bg-red-700/10 rounded-full blur-3xl z-0" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-red-700/10 rounded-full blur-3xl z-0" />
          <div className="relative z-10 container mx-auto px-4">
            <div className="flex flex-col items-center mt-10 mb-4">
              <motion.span
                className="vintage-banner mb-2"
                variants={titleVariants}
                initial="hidden"
                animate="visible"
              >
                神農祭
              </motion.span>
              <motion.span
                className="vintage-info text-xl mt-2"
                variants={subtitleVariants}
                initial="hidden"
                animate="visible"
              >
                《NIU 2025 校園演唱會》
              </motion.span>
            </div>
            <motion.div
              className="flex flex-col md:flex-row justify-center items-center gap-6 mb-6"
              variants={infoListVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div
                className="vintage-info flex flex-col items-center"
                variants={infoItemVariants}
              >
                <span className="text-[#b91c1c] font-bold">日期</span>
                <span className="text-lg">二零二五年六月六日（星期五）</span>
              </motion.div>
              <motion.div
                className="vintage-info flex flex-col items-center"
                variants={infoItemVariants}
              >
                <span className="text-[#b91c1c] font-bold">地點</span>
                <span className="text-lg">國立宜蘭大學學生活動中心</span>
              </motion.div>
            </motion.div>
            <motion.p
              className="text-[#b91c1c] text-center font-semibold text-lg mb-8 tracking-wide vintage-info bg-[#f5ecd7]/80 border-0 shadow-none w-full"
              variants={thanksVariants}
              initial="hidden"
              animate="visible"
            >
              特別感謝這些贊助商，讓我們能夠更順利的舉辦活動，再次感謝贊助商們對我們的支持🙏
            </motion.p>
            <h2 className="sponsor-title">贊助廠商名單</h2>
            <motion.div
              ref={cardContainerRef}
              variants={cardListVariants}
              initial="hidden"
              animate="visible"
            >
              {[
                { direction: "left" as const },
                { direction: "right" as const },
              ].map((marqueeProps, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  variants={marqueeVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <Marquee
                    speed={50}
                    pauseOnHover={true}
                    gradient={false}
                    pauseOnClick={true}
                    direction={marqueeProps.direction}
                    className={`my-6 ${index % 2 === 1 ? "mb-16" : ""}`}
                  >
                    <div className="flex gap-8 px-4">
                      {[...Array(8)].map((_, cardIndex) => {
                        const sponsor = data[cardIndex % data.length];
                        return (
                          <motion.a
                            href={sponsor.link}
                            key={cardIndex}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group transform transition-all duration-300 hover:scale-105"
                            variants={cardVariants}
                            whileHover={{
                              scale: 1.08,
                              boxShadow: "0 8px 32px 0 rgba(185,28,28,0.18)",
                            }}
                            whileTap={{ scale: 0.96 }}
                          >
                            <div className="card relative">
                              <span
                                className="absolute top-2 right-2 text-xs text-[#b91c1c] opacity-60 rotate-[-15deg] select-none"
                                style={{ fontFamily: "serif" }}
                              >
                                看更多
                              </span>
                              <img
                                className="object-contain md:w-[120px] w-[60px] max-h-[120px] z-10 rounded-lg transition-transform group-hover:scale-105 border border-[#bfa16b] bg-[#fffbe6]"
                                src={sponsor.logo}
                                alt={sponsor.name}
                              />
                              <h3
                                className="text-center font-bold leading-[1.5] p-2 text-[#b91c1c] z-10 text-xl tracking-widest mt-2"
                                style={{
                                  fontFamily: "Noto Serif TC, serif",
                                  textShadow:
                                    "2px 2px 0 #fffbe6, 0 0 8px #e67171",
                                }}
                              >
                                {sponsor.name}
                              </h3>
                            </div>
                          </motion.a>
                        );
                      })}
                    </div>
                  </Marquee>
                </motion.div>
              ))}
            </motion.div>
            <motion.div
              className="mt-16 mb-4 flex flex-col items-center"
              variants={footerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.span
                className="vintage-info text-base"
                variants={footerItemVariants}
              >
                主辦單位：國立宜蘭大學學生會
              </motion.span>
              <motion.span
                className="vintage-info text-base mt-1"
                variants={footerItemVariants}
              >
                協辦單位：其他合作廠商與技術支援公司
              </motion.span>
            </motion.div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
