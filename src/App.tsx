// import Marquee from "react-fast-marquee";
// import sponsors from "./data/data";

// const App = () => {
//   // load data from data.ts

//   const data = sponsors;
//   console.log(data);

//   return (
//     <div className="w-full">
//       <div className="bg-gray-900 shadow-md rounded-lg">
//         <h1 className="text-center font-bold leading-[1.5] lg:p-4 py-8 gradient lg:text-6xl md:text-5xl text-2xl">
//           《NIU 2025 校園演唱會 - 神農祭》
//         </h1>
//       </div>
//       <h2 className="text-center font-bold leading-[1.5] p-10 gradient lg:text-5xl md:text-4xl text-3xl">
//         贊助廠商名單
//       </h2>
//       <Marquee
//         speed={50}
//         pauseOnHover={true}
//         gradient={true}
//         gradientColor="black"
//         pauseOnClick={true}
//         direction="left"
//       >
//         <div className="flex gap-8 px-4">
//           {[...Array(8)].map((_, index) => (
//             <a
//               href={data[index % data.length].link}
//               key={index}
//               className="card"
//             >
//               <img
//                 className="object-cover w-full max-h-[150px]"
//                 src={data[index % data.length].logo}
//                 alt={data[index % data.length].name}
//               />
//               <h3 className="text-center font-bold leading-[1.5] p-4">
//                 {data[index % data.length].name}
//               </h3>
//             </a>
//           ))}
//         </div>
//       </Marquee>
//       <Marquee
//         speed={50}
//         pauseOnHover={true}
//         gradient={true}
//         gradientColor="black"
//         pauseOnClick={true}
//         direction="right"
//         className="my-10"
//       >
//         <div className="flex gap-8 px-4">
//           {[...Array(8)].map((_, index) => (
//             <a
//               href={data[index % data.length].link}
//               key={index}
//               className="card"
//               target="_blank"
//             >
//               <img
//                 className="object-cover w-full max-h-[150px]"
//                 src={data[index % data.length].logo}
//                 alt={data[index % data.length].name}
//               />
//               <h3 className="text-center font-bold leading-[1.5] p-4">
//                 {data[index % data.length].name}
//               </h3>
//             </a>
//           ))}
//         </div>
//       </Marquee>
//     </div>
//   );
// };

// export default App;
// import Marquee from "react-fast-marquee";
// import sponsors from "./data/data";

// const App = () => {
//   const data = sponsors;

//   return (
//     <div className="relative min-h-screen bg-gradient-to-br from-[#0a0a12] via-[#1a1a2e] to-[#2a2a3e] overflow-hidden">
//       <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 to-indigo-900/30 backdrop-blur-xl opacity-50 z-0"></div>

//       <div className="absolute -top-20 -right-20 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-blob"></div>
//       <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>

//       <div className="relative z-10 container mx-auto px-4">
//         {/* <div className="bg-gradient-to-r from-purple-900/30 to-indigo-900/30 backdrop-blur-sm rounded-2xl shadow-2xl mb-10">
//           <h1
//             className="text-center font-bold leading-[1.5] lg:p-6 py-8
//             bg-gradient-to-r from-[#850cf5] to-[#cf9bff]
//             bg-clip-text text-transparent
//             lg:text-6xl md:text-5xl text-4xl
//             drop-shadow-[0_5px_10px_rgba(133,12,245,0.4)]"
//           >
//             《NIU 2025 校園演唱會 - 神農祭》
//           </h1>
//         </div> */}

//         <h2
//           className="text-center font-bold leading-[1.5] p-10
//           bg-gradient-to-r from-[#850cf5] to-[#cf9bff]
//           bg-clip-text text-transparent
//           lg:text-5xl md:text-4xl text-3xl
//           drop-shadow-[0_5px_10px_rgba(133,12,245,0.3)]"
//         >
//           贊助廠商名單
//         </h2>

//         {[{ direction: "left" as const }, { direction: "right" as const }].map(
//           (marqueeProps, index) => (
//             <Marquee
//               key={index}
//               speed={50}
//               pauseOnHover={true}
//               gradient={false}
//               pauseOnClick={true}
//               direction={marqueeProps.direction}
//               className={`my-10 ${index % 2 === 1 ? "mb-20" : ""}`}
//             >
//               <div className="flex gap-8 px-4">
//                 {[...Array(8)].map((_, cardIndex) => {
//                   const sponsor = data[cardIndex % data.length];
//                   return (
//                     <a
//                       href={sponsor.link}
//                       key={cardIndex}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="group transform transition-all duration-300 hover:scale-105"
//                     >
//                       <div
//                         className="card overflow-hidden
//                       bg-gradient-to-br from-[#7A73D1] to-[#211C84]
//                       border border-purple-700/50
//                       rounded-2xl shadow-2xl
//                       hover:shadow-purple-900/50
//                       transition-all duration-300
//                       min-w-[360px] min-h-[260px]
//                       flex flex-col justify-center items-center
//                       p-4 space-y-4"
//                       >
//                         <img
//                           className="object-contain w-full max-h-[150px] z-10 rounded-xl transition-transform group-hover:scale-110"
//                           src={sponsor.logo}
//                           alt={sponsor.name}
//                         />
//                         <h3
//                           className="text-center font-bold leading-[1.5] p-4
//                         text-white z-10
//                         bg-gradient-to-r from-[#850cf5] to-[#cf9bff]
//                         bg-clip-text text-transparent"
//                         >
//                           {sponsor.name}
//                         </h3>
//                       </div>
//                     </a>
//                   );
//                 })}
//               </div>
//             </Marquee>
//           )
//         )}
//       </div>
//     </div>
//   );
// };

// export default App;

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
        <h2 className="text-center font-bold p-8 text-4xl text-red-600  border-b-4 border-yellow-600 mx-auto w-max mb-10">
          贊助廠商名單
        </h2>

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
                      <div
                        className="card overflow-hidden 
                        bg-white 
                        border-2 border-red-600/50 
                        rounded-lg shadow-md 
                        hover:shadow-red-600/30 
                        transition-all duration-300 
                        min-w-[300px] min-h-[200px] 
                        flex flex-col justify-center items-center 
                        p-4 space-y-4"
                      >
                        <img
                          className="object-contain w-full max-h-[120px] z-10 rounded-lg transition-transform group-hover:scale-105"
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
