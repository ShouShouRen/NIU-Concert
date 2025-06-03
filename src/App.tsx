// import Marquee from "react-fast-marquee";
// import sponsors from "./data/data";
import { sponsors } from "./data/sponsors";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Sponsor3DWall from "./Sponsor3DWall";

const App = () => {
  const data = sponsors;
  const goldSponsors = data.filter((s) => s.level === "gold");
  const silverSponsors = data.filter((s) => s.level === "silver");
  const bronzeSponsors = data.filter((s) => s.level === "bronze");
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
            <h2 className="sponsor-title">金牌贊助商</h2>
            <div className="relative w-full h-[350px] md:h-[500px] mb-2">
              <Sponsor3DWall sponsors={goldSponsors} />
            </div>
            <div className="flex flex-col items-center mb-10">
              <div className="flex items-center gap-2 animate-drag-hint animate-swing-hint mb-2 select-none">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  className="opacity-70"
                >
                  <path
                    d="M18 14H6M6 14l5-5M6 14l5 5"
                    stroke="#b91c1c"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span
                  className="text-[#b91c1c] font-bold text-base tracking-wide"
                  style={{ fontFamily: "Noto Serif TC, serif" }}
                >
                  拖曳旋轉3D牆
                </span>
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  className="opacity-70"
                >
                  <path
                    d="M10 14h12M22 14l-5-5M22 14l-5 5"
                    stroke="#b91c1c"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
            <h2 className="sponsor-title">銀牌贊助商</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12 place-items-center">
              {silverSponsors.map((sponsor, idx) => (
                <a
                  key={idx}
                  href={sponsor.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center group hover:scale-105 transition-transform"
                >
                  <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    className={`object-contain w-32 h-20 md:w-40 md:h-28 rounded-lg border border-yellow-700 bg-white shadow mb-2 animate-bounce-cute animate-delay-${
                      idx % 6
                    }`}
                    onError={(e) => (e.currentTarget.src = "/no-image.png")}
                  />
                  <span
                    className="font-bold text-lg text-[#b91c1c] tracking-widest mt-1 text-center"
                    style={{ fontFamily: "Noto Serif TC, serif" }}
                  >
                    {sponsor.name}
                  </span>
                </a>
              ))}
            </div>
            <h2 className="sponsor-title">銅牌贊助商</h2>
            <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-12 place-items-center">
              {bronzeSponsors.map((sponsor, idx) => (
                <a
                  key={idx}
                  href={sponsor.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center group hover:scale-105 transition-transform"
                >
                  <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    className={`object-contain w-20 h-12 md:w-28 md:h-16 rounded border border-yellow-700 bg-white shadow mb-1 animate-bounce-cute animate-delay-${
                      idx % 6
                    }`}
                    onError={(e) => (e.currentTarget.src = "/no-image.png")}
                  />
                  <span
                    className="font-bold text-xs text-[#b91c1c] tracking-widest text-center"
                    style={{ fontFamily: "Noto Serif TC, serif" }}
                  >
                    {sponsor.name}
                  </span>
                </a>
              ))}
            </div>
            <motion.div
              className="mt-16 mb-4 flex flex-col md:flex-row items-stretch justify-center gap-4"
              variants={footerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div
                className="vintage-info text-base mb-2 md:mb-0 min-h-[100px] flex-1 flex flex-col items-center justify-center text-center gap-1 px-4 py-3"
                variants={footerItemVariants}
              >
                <div className="font-extrabold text-lg mb-1 flex items-center gap-2">
                  <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" fill="#FFD700" />
                    <text
                      x="12"
                      y="17"
                      textAnchor="middle"
                      fontSize="14"
                      fill="#22577A"
                      fontWeight="bold"
                    >
                      主
                    </text>
                  </svg>
                  活動主辦單位
                </div>
                <div className="border-t border-yellow-400 w-8 mb-1"></div>
                <div className="leading-relaxed">
                  國立宜蘭大學 第十四屆 學生會
                </div>
                <div className="leading-relaxed">國立宜蘭大學 畢聯會</div>
              </motion.div>
              <motion.div
                className="vintage-info text-base mb-2 md:mb-0 min-h-[100px] flex-1 flex flex-col items-center justify-center text-center gap-1 px-4 py-3"
                variants={footerItemVariants}
              >
                <div className="font-extrabold text-lg mb-1 flex items-center gap-2">
                  <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" fill="#38B6A8" />
                    <text
                      x="12"
                      y="17"
                      textAnchor="middle"
                      fontSize="14"
                      fill="#fff"
                      fontWeight="bold"
                    >
                      執
                    </text>
                  </svg>
                  活動執行單位
                </div>
                <div className="border-t border-teal-400 w-8 mb-1"></div>
                <div className="leading-relaxed">伯熱音悅娛樂有限公司</div>
              </motion.div>
              <motion.div
                className="vintage-info text-base min-h-[100px] flex-1 flex flex-col items-center justify-center text-center gap-1 px-4 py-3"
                variants={footerItemVariants}
              >
                <div className="font-extrabold text-lg mb-1 flex items-center gap-2">
                  <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" fill="#B87333" />
                    <text
                      x="12"
                      y="17"
                      textAnchor="middle"
                      fontSize="14"
                      fill="#fff"
                      fontWeight="bold"
                    >
                      感
                    </text>
                  </svg>
                  特別感謝
                </div>
                <div className="border-t border-orange-400 w-8 mb-1"></div>
                <div className="leading-relaxed">宜蘭大學校友會</div>
                <div className="leading-relaxed">酷可創念</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
