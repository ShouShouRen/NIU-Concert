import Marquee from "react-fast-marquee";
import sponsors from "./data/data";

const App = () => {
  const data = sponsors;

  return (
    <div className="relative min-h-screen bg-[#f5f5f5] overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/rice-paper.png')] opacity-65 z-0"></div>

      <div className="absolute top-0 left-0 w-64 h-64 bg-red-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-red-600/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="bg-white border-8 border-orange-200 rounded-lg shadow-lg my-10 p-6 text-center">
          <h1 className="text-5xl font-bold text-red-600 mb-2">神農祭</h1>
          <h2 className="text-3xl font-semibold text-yellow-600 mb-4">
            《NIU 2025 校園演唱會》
          </h2>
          <div className="flex justify-center items-center space-x-8">
            <div className="flex lg:flex-row flex-col text-center">
              <p className="text-yellow-600 text-lg">日期：</p>
              <p className="text-red-600 font-bold text-xl">
                二零二五年六月六日
              </p>
            </div>
            <div className="flex lg:flex-row flex-col text-center">
              <p className="text-yellow-600 text-lg">地點：</p>
              <p className="text-red-600 font-bold text-xl">
                國立宜蘭大學學生活動中心
              </p>
            </div>
          </div>
        </div>
        <p className="text-yellow-600 text-center font-semibold text-lg mb-8">
          特別感謝這些贊助商，讓我們能夠更順利的舉辦活動，再次感謝贊助商們對我們的支持🙏
        </p>
        <h2 className="sponsor-title">贊助廠商名單</h2>

        {[{ direction: "left" as const }, { direction: "right" as const }].map(
          (marqueeProps, index) => (
            <Marquee
              key={index}
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
                    <a
                      href={sponsor.link}
                      key={cardIndex}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group transform transition-all duration-300 hover:scale-105"
                    >
                      <div className="card">
                        <img
                          className="object-contain md:w-[120px] w-[60px] max-h-[120px] z-10 rounded-lg transition-transform group-hover:scale-105"
                          src={sponsor.logo}
                          alt={sponsor.name}
                        />
                        <h3
                          className="text-center font-bold leading-[1.5] p-2 
                          text-red-600 z-10 text-xl"
                        >
                          {sponsor.name}
                        </h3>
                      </div>
                    </a>
                  );
                })}
              </div>
            </Marquee>
          )
        )}
      </div>
    </div>
  );
};

export default App;
