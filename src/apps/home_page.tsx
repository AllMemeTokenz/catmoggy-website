import { MdOutlineSubdirectoryArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Toaster, toast } from "react-hot-toast";
import NFTGallery from "../components/ui/home_page/nft_card";

import { RiTelegram2Fill } from "react-icons/ri";

import {
  childVariants,
  containerVariants,
} from "../components/lib/motion_variants";
import SlideYawn from "../components/ui/home_page/slide_yawn";

import zz_img from "../assets/images/home_page/zzz.svg";
import bannerImg1 from "../assets/images/home_page/bannerBlue.svg";
import bannerImg2 from "../assets/images/home_page/bannerPurple.svg";
import tapperImg from "../assets/images/home_page/tapperArrowIcon.svg";
import plan1 from "../assets/images/home_page/plan-img1.svg";
import arrow from "../assets/images/home_page/cursive-arrow-icon.webp";
import plus1 from "../assets/images/home_page/plus-img.svg";
import getYawn from "../assets/images/home_page/getYown-img.svg";
import cursorimg from "../assets/images/home_page/cursor-icon.svg";
import uniswap from "../assets/images/home_page/pink-hourse.svg";
import keysec_img from "../assets/images/home_page/key-sec-mobile-img.svg";
import card1 from "../assets/images/home_page/card-1-n.svg";
import card2 from "../assets/images/home_page/card-2-n.svg";
import lines_img from "../assets/images/home_page/lines-img1.svg";
import BlockTemplate from "../components/ui/home_page/block_template";

const HomePage = () => {
  const tokenCA = "74NL3WreKRaYDduquKMYNJBSatdcgbNUjgpUtLxgp28w";
  return (
    <main className="flex flex-col gap-8 xl:gap-10 2xl:gap-12 pt-6 md:pt-8 xl:pt-10 2xl:pt-24 font-main overflow-hidden">
      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex gap-8 lg:justify-between items-start flex-col sm:flex-row px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-24"
      >
        <div className="flex flex-col gap-8 w-[100%] md:w-[60%] lg:w-fit">
          <motion.h1
            variants={childVariants}
            className="text-[3rem] md:text-[3rem] min-[1000px]:text-[4rem] hidden sm:block w-[100%] md:w-fit lg:text-[5.3rem] xl:text-[7rem] 2xl:text-[10rem] leading-none font-semibold tracking-tight text-blue-950"
          >
            WELCOME TO
            <br />
            CATMOGGY WORLD.
            <br />A GLOBAL{" "}
            <span>
              <img
                src={zz_img}
                alt="..zzz"
                className="inline w-[3rem] md:w-[5rem] xl:w-[6rem] 2xl:w-[7rem]"
              />
            </span>
            <br />
            BRAND WITH
            <br />
            <MdOutlineSubdirectoryArrowRight className="inline w-[3rem] md:w-[5rem] xl:w-[6rem] 2xl:w-[7rem]" />{" "}
            PURPOSE
          </motion.h1>
          <motion.h1
            variants={childVariants}
            className="text-[3rem] sm:hidden w-[100%] md:w-fit lg:text-[6rem] xl:text-[7rem] 2xl:text-[10rem] leading-none font-semibold tracking-tight"
          >
            WELCOME TO YAWN'S WORLD. A GLOBAL{" "}
            <span>
              <img
                src={zz_img}
                alt="..zzz"
                className="inline w-[3rem] md:w-[5rem] xl:w-[6rem] 2xl:w-[7rem]"
              />
            </span>{" "}
            BRAND WITH{" "}
            <MdOutlineSubdirectoryArrowRight className="inline w-[3rem] md:w-[5rem] xl:w-[6rem] 2xl:w-[7rem]" />{" "}
            PURPOSE
          </motion.h1>
          <motion.p
            variants={childVariants}
            className="text-[18px] xl:text-[22px] 2xl:text-[26px] leading-relaxed tracking-wide font-light uppercase w-[100%] sm:w-[800px] text-blue-950"
          >
            CATMOGGY ($CMY) is more than a meme coin. It’s a community, way of
            life and a globally recognized brand.
          </motion.p>
          <motion.div variants={childVariants} className="animate-bounce">
            <Link
              className="font-semibold cursor-pointer px-6 py-3 uppercase border border-[#172554] shadow-[2px_2px_0_#172554] active:shadow-[0.5px_0.5px_0_#172554] active:translate-x-[1px] active:translate-y-[1px] text-[#EFF6FF] active:scale-[0.99] transition-all ease-linear duration-100 hover:bg-[#86198F]/80 active:bg-[#86198F]/90 bg-[#86198F]/70 text-[17px] rounded-xl"
              to={
                "https://app.uniswap.org/swap?outputCurrency=0x88Ce174C655B6d11210A069B2c106632DaBDB068&chain=ethereum"
              }
            >
              BUY $CMY
            </Link>
          </motion.div>
        </div>

        <div className="flex gap-4 w-[100%] sm:w-[40%] lg:w-fit relative ml-8 xl:ml-32">
          <motion.img
            src={bannerImg2}
            alt="bannerYellow"
            initial={{ opacity: 0.1, rotate: 13 }}
            whileInView={{ opacity: 1, rotate: -3 }}
            transition={{ duration: 2, ease: "linear" }}
            viewport={{ amount: 0.5, once: false }}
            className="w-[60%] sm:w-[100%] md:w-[80%] lg:w-[300px] xl:w-[400px] 2xl:w-[700px] sm:absolute sm:top-14 min-[1000px]:top-32 md:top-20 lg:-bottom-12 lg:-left-72 sm:-left-36 md:-left-32 xl:lg:-left-[400px] 2xl:lg:-left-[700px]"
          />
          <motion.img
            src={bannerImg1}
            alt="bannerGreen"
            initial={{ opacity: 0.5, rotate: -13 }}
            whileInView={{ opacity: 1, rotate: -3 }}
            transition={{ duration: 2, ease: "linear" }}
            viewport={{ amount: 0.5, once: false }}
            className="w-[60%] sm:w-[100%] md:w-[80%] lg:w-[300px] xl:w-[400px] 2xl:w-[700px] lg:static absolute -top-6 right-2"
          />
        </div>
      </motion.section>

      <motion.div
        initial={{ opacity: 0, x: -0 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Toaster
          toastOptions={{
            className: "!z-[9999] !bg-[#fefce8] !border !border-[#fafaf2]",
          }}
          containerClassName="md:mt-14 mt-24"
        />

        {tokenCA && (
          <section className="w-full flex mb-5 lg:mb-0 lg:mt-0 flex-col lg:flex-row items-center justify-between lg:px-[111px] px-5 xl:px-[190px]">
            <div className="flex my-10 xl:mx-9 w-full flex-col items-center justify-center">
              <h2 className="text-5xl font-bold mb-2 text-center text-blue-950">
                $CMY CA
              </h2>
              <h3 className="text-2xl font-light mb-8 text-center text-blue-950">
                Hit the copy button so you won&apos;t get the address wrong!{" "}
              </h3>
              <div className="font-semibold flex flex-col sm:flex-row items-center justify-center text-center sm:space-x-5 space-y-3 sm:space-y-0 relative px-6 border border-[#172554] shadow-[1px_1px_0_#172554] transition-all ease-linear duration-100 bg-[#F5D0FE] text-[#172554] text-xl py-3 rounded-xl">
                <span className="break-all sm:break-normal">{tokenCA}</span>
                <a
                  onClick={() => {
                    navigator.clipboard
                      .writeText(tokenCA)
                      .then(() => {
                        toast.success("Copied to clipboard");
                      })
                      .catch(() => {
                        toast.error("Could not copy");
                      });
                  }}
                  className="font-semibold cursor-pointer px-4 uppercase border border-[#172554] shadow-[2px_2px_0_#172554] active:shadow-[0.5px_0.5px_0_#172554] active:translate-x-[1px] active:translate-y-[1px] text-[#EFF6FF] active:scale-[0.99] transition-all ease-linear duration-100 hover:bg-[#86198F]/80 active:bg-[#86198F]/90 bg-[#86198F]/70 text-[17px] py-2 rounded-xl"
                >
                  COPY
                </a>
              </div>
            </div>
          </section>
        )}
      </motion.div>

      <motion.section
        id="about"
        className="flex flex-col gap-8 pt-14 items-center bg-[#F5D0FE] w-[100%] text-[#172554]"
      >
        <SlideYawn />
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeIn" }}
          viewport={{ amount: 0.2, once: false }}
          className="text-[3.5rem] sm:text-[4.5rem] md:text-[5.5rem] xl:text-[6.5rem] 2xl:text-[7.5rem] w-[70%] font-normal leading-none text-center tracking-tighter px-4 sm:px-6 "
        >
          MEET CATMOGGY, THE WORLD OF NFTS AND AI MEMES.
        </motion.h1>
        <motion.p className="text-[16px] md:text-[18px] xl:text-[24px] 2xl:text-[30px] leading-relaxed tracking-wide font-light uppercase w-[100%] lg:w-[80%] text-center px-4 sm:px-6 ">
          CATMOGGY - $CMY is a revolutionary digital asset that combines the
          utility of NFTs in the field of artificial intelligence (AI) and the
          world of memes. With a blockchain-based ecosystem, CMY aims to empower
          creators, communities, and developers to innovate in the world of NFTs
          and AI Memes.
        </motion.p>
        <SlideYawn />
      </motion.section>

      <motion.section
        id="ecosystem"
        className="flex flex-col md:flex-row gap-6 md:gap-0 md:justify-between px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-24 mt-10 md:h-[700px] md:overflow-y-auto asideScroll"
      >
        <NFTGallery />
      </motion.section>

      <section
        id="latest"
        className="flex gap-8 flex-col mt-6 py-14 bg-[#F8F8F8] px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-24"
      >
        <motion.h2
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeIn" }}
          viewport={{ amount: 0.2, once: false }}
          className="text-[3rem] xs:text-[4rem] text-center md:text-[5rem] lg:text-[6rem] xl:text-[7rem] font-light w-[100%] sm:w-[500px] md:w-[600px] lg:w-[700px] xl:w-[900px] uppercase self-center tracking-tighter leading-none"
        >
          Fresh Updates From The World{" "}
          <span>
            <img
              src={tapperImg}
              className="inline w-[70px] xl:w-[100px]"
              alt="Pointing to YAWN"
            />
          </span>{" "}
          of $CMY{" "}
          <span>
            <img
              src={zz_img}
              className="inline w-[70px] xl:w-[100px]"
              alt="Globe representing $YAWN'S universe"
            />
          </span>
        </motion.h2>
      </section>

      <section
        id="community"
        className="bg-[#94B8FF] flex flex-col gap-6 min-lg:gap-0 min-lg:flex-row min-lg:justify-between py-14 px-4 sm:px-6 min-lg:px-8 xl:px-10 2xl:px-24"
      >
        <div className="self-center min-lg:self-auto relative">
          <img
            src={plan1}
            alt="Join the TG Community"
            className="w-[288px] h-[308px] xs:w-[361px] xs:h-[387px] sm:w-[588px] sm:h-[586px] sticky z-40"
          />
          <motion.div
            className="bg-[#578cf359] rounded-2xl w-[228px] h-[288px] xs:w-[310px] xs:h-[367px] sm:w-[518px] sm:h-[536px] absolute top-0 z-0"
            initial={{ x: 75, rotate: 0 }}
            whileInView={{ x: 75, rotate: 10 }}
            transition={{ duration: 1 }}
            viewport={{ amount: 0.3, once: false }}
          />
        </div>
        <motion.div
          className="min-lg:w-[45%] flex flex-col items-start gap-4"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeIn" }}
          viewport={{ amount: 0.2, once: false }}
        >
          <p className="text-[12px] min-lg:text-[14px] leading-relaxed tracking-wide font-light uppercase w-[100%]">
            (Community)
          </p>
          <h3 className="text-[3rem] xs:text-[4rem] md:text-[4.5rem] min-lg:text-[5.5rem] xl:text-[6.5rem] min-lg:w-[90%] font-light w-[100%]  uppercase tracking-tighter leading-none">
            Join the Yawn Tribe: Connect on Telegram
          </h3>
          <p className="text-[16px] md:text-[18px] xl:text-[24px] 2xl:text-[30px] leading-relaxed tracking-wide font-light uppercase w-[100%]">
            Stay in the loop with real-time updates, discussions, and exclusive
            insights by joining the Yawn community on Telegram. It’s where the
            Yawn tribe gathers to share, learn, and grow together.
          </p>
          <div className="flex gap-6 items-center mt-2">
            <motion.a
              className="flex gap-2 items-center group/parent outline-none w-fit text-[16px] uppercase xl:text-[18px] 2xl:text-[20px] rounded-full bg-black text-white border border-black py-4 px-8 cursor-pointer"
              href="https://t.me/yawnsworld"
              whileHover={{ backgroundColor: "#ffffff", color: "#000000" }}
              transition={{ ease: "circOut" }}
              aria-label="Join Telegram Community"
            >
              <p>Join TG Community</p>
              <RiTelegram2Fill className="w-5 h-5 text-white group-hover/parent:text-black" />
            </motion.a>

            <img
              src={arrow}
              alt="arrow pointing to tg community link"
              className="hidden sm:block -translate-y-8"
            />
          </div>
        </motion.div>
      </section>

      <section
        id="get-yawn"
        className="flex flex-col gap-8 sm:gap-0 py-10 px-4 sm:px-6 min-lg:px-8 xl:px-10 2xl:px-24 bg-[#F8F8F8] w-[100%]"
      >
        <section className="flex flex-col gap-6 sm:flex-row sm:gap-0 sm:justify-between  w-[100%]">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeIn" }}
            viewport={{ amount: 0.2, once: false }}
            className="flex flex-col gap-4 w-[100%] lg:w-[600px] xl:w-[700px] lg:py-4"
          >
            <p className="font-thin opacity-80 text-[20px] xl:text-[24px] 2xl:text-[26px] tracking-wide leading-relaxed">
              (GET YOUR YAWN)
            </p>
            <h3 className="text-[3rem] opacity-90 xs:text-[4rem] md:text-[4.5rem] lg:text-[5rem] xl:text-[6rem] font-light w-[100%]  uppercase tracking-normal leading-none">
              where to buy the sleepiest token{" "}
              <span>
                <img
                  src={plus1}
                  className="inline w-[70px] xl:w-[100px]"
                  alt="PLUS"
                />
              </span>
            </h3>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeIn" }}
            viewport={{ amount: 0.2, once: false }}
            className="w-[400px] xl:w-[600px] 2xl:w-[700px] flex justify-end"
          >
            <img
              src={getYawn}
              alt="BUY YAWN TODAY"
              className="w-[100%] aspect-square"
            />
          </motion.div>
        </section>
        <section className="flex flex-col sm:flex-row sm:justify-between items-center">
          <motion.div
            className="flex flex-col gap-3 w-[100%] sm:w-[350px] min-lg:w-[500px] xl:w-[600px] 2xl:w-[700px] py-2"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeIn" }}
            viewport={{ amount: 0.2, once: false }}
          >
            <h3 className="text-[2rem] md:text-[3rem] xl:text-[4.5rem] 2xl:text-[6rem]">
              Uniswap
            </h3>
            <p className="font-thin opacity-80 text-[18px]  min-lg:text-[20px] xl:text-[24px] 2xl:text-[30px] tracking-wide leading-relaxed">
              Trade $YAWN tokens easily and securely on Uniswap, the leading
              decentralized exchange for swapping tokens directly from your
              wallet.
            </p>
            <Link
              to={""}
              className="font-light w-fit text-[16px] shadow-md lg:text-[18px] xl:text-[20px] bg-white py-3 px-6 rounded-3xl"
            >
              Go to Uniswap
            </Link>
            <div className="w-[100px] self-center">
              <img src={cursorimg} alt="Pointer to Uniswap" className="" />
            </div>
          </motion.div>
          <div className="w-[100%] self-center lg:self-auto sm:w-[300px] md:w-[400px] lg:w-[600px] xl:w-[700px] 2xl:w-[800px]  flex justify-center items-center shadow-2xl shadow-white rounded-xl lg:h-[300px] xl:h-[400px] 2xl:h-[500px] bg-white">
            <motion.img
              src={uniswap}
              alt="UNISWAP"
              className="w-[80%] min-lg:w-[200px]"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeIn" }}
              viewport={{ amount: 0.2, once: false }}
            />
          </div>
        </section>
      </section>

      <section className="flex flex-col gap-12 py-10 px-4 sm:px-6 min-lg:px-8 xl:px-10 2xl:px-24 w-[100%]">
        <section className="flex flex-col min-lg:flex-row gap-4 min-lg:gap-0 min-lg:justify-between">
          <motion.div
            className="flex flex-col gap-3 w-[100%] min-lg:w-[580px] xl:w-[690px] 2xl:w-[790px] min-lg:relative"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeIn" }}
            viewport={{ amount: 0.2, once: false }}
          >
            <h3 className="font-thin opacity-80 text-[20px] xl:text-[24px] 2xl:text-[26px] tracking-wide leading-relaxed">
              (YAWN BY THE NUMBERS)
            </h3>
            <p className="text-[3rem] md:text-[5rem] xl:text-[6rem] 2xl:text-[7rem] tracking-wider w-[100%] leading-none">
              KEY STATS AND SECURITY
            </p>
            <div className="flex gap-0 min-lg:absolute -top-12 -right-44 xl:-right-32 2xl:-top-6">
              <img
                src={keysec_img}
                alt="key sec images"
                className="block min-lg:hidden"
              />
              <img
                src={card1}
                alt=""
                className="hidden min-lg:block z-20 w-[180px]"
              />
              <img
                src={card2}
                alt=""
                className="hidden min-lg:block -translate-x-24 w-[180px]"
              />
            </div>
          </motion.div>
          <div className="w-[200px] self-center hidden min-lg:block">
            <img src={lines_img} alt="curvy line" />
          </div>
        </section>
        <BlockTemplate />
      </section>
    </main>
  );
};

export default HomePage;
