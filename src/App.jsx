import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

import "./App.css";

function App() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // const scrollYProgressSpring = useSpring(scrollYProgress, {
  //   stiffness: 100,
  //   damping: 40,
  // });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 12]);
  const imageX = useTransform(scrollYProgress, [0, 1], ["95%", "0%"]);

  

  return (
    <>
      <main className="bg-gray-300">
        <div ref={ref} className="relative z-10 h-[200vh] overflow-clip">
          <motion.div
            style={{ scale }}
            className="hero-background origin-[94%_40%] grid h-screen gap-2 p-6 pt-20 [grid-template-rows:4fr_1fr]"
          >
            <div className="bg-white flex p-12 rounded-3xl window-mask">
              <div className="flex h-full flex-col">
                <h1 className="my-auto max-w-[12ch] text-[128px] font-bold leading-[0.85]">
                  Playing with masks and Framer Motion
                </h1>
                <p className="text-3xl">
                  This animation is inspired by th Runway.com homepage. <br />
                  Recreated by frontend.fyi.
                </p>
              </div>
              <div className="my-auto mr-0 mx-auto rounded-full aspect-[5/8] w-[300px] min-w-[300px] border-[4px]"></div>
            </div>
            <div className="grid grid-flow-row grid-cols-3 gap-2">
              <div className="col-span-2 rounded-3xl border border-white">
                lala
              </div>
              <a
                href="#"
                className="flex items-center justify-center rounded-3xl bg-orange-400 text-center font-bold text-2xl text-white"
              >
                Early Access
              </a>
            </div>
          </motion.div>
        </div>
        <div className="mt-[-200vh] h-[200vh] bg-blue-100 pb-20 overflow-clip">
          <motion.span
            style={{ x: imageX }}
            className="sticky top-1/4 block mx-auto aspect-video bg-gray-300 w-[1600px] max-w-[90%] rounded-[60px] shadow-2xl"
          ></motion.span>
        </div>
        <div className="bg-blue-100 text-[300px] space-y-[80px] p-36">
          <p>Some more text</p>
          <p>Some more text</p>
          <p>Some more text</p>
          <p>Some more text</p>
          <p>To scroll ...</p>
        </div>
      </main>
    </>
  );
}

export default App;
