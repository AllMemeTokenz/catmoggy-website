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
import tgBanner from "../assets/images/home_page/tg-section.svg";
import arrow from "../assets/images/home_page/cursive-arrow-icon.webp";
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
                "https://dexscreener.com/solana/74NL3WreKRaYDduquKMYNJBSatdcgbNUjgpUtLxgp28w"
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
                        toast.success("Contract Adddress Has Been Copied");
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
            src={tgBanner}
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
          className="min-lg:w-[45%] flex flex-col items-start gap-4 text-[#172554]"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeIn" }}
          viewport={{ amount: 0.2, once: false }}
        >
          <p className="text-[12px] min-lg:text-[14px] leading-relaxed tracking-wide font-light uppercase w-[100%]">
            (Community)
          </p>
          <h3 className="text-[3rem] xs:text-[4rem] md:text-[4.5rem] min-lg:text-[5.5rem] xl:text-[6.5rem] min-lg:w-[90%] font-light w-[100%]  uppercase tracking-tighter leading-none">
            Join the CATMOGGY Tribe: Connect on Telegram
          </h3>
          <p className="text-[16px] md:text-[18px] xl:text-[24px] 2xl:text-[30px] leading-relaxed tracking-wide font-light uppercase w-[100%]">
            Stay in the loop with real-time updates, discussions, and exclusive
            insights by joining the Yawn community on Telegram. It’s where the
            Yawn tribe gathers to share, learn, and grow together.
          </p>
          <div className="flex gap-6 items-center mt-2">
            <motion.a
              className="flex gap-2 group/parent font-semibold cursor-pointer px-6 py-3 uppercase border border-[#172554] shadow-[2px_2px_0_#172554] active:shadow-[0.5px_0.5px_0_#172554] active:translate-x-[1px] active:translate-y-[1px] text-[#EFF6FF] active:scale-[0.99] transition-all ease-linear duration-100 hover:bg-[#86198F]/80 active:bg-[#86198F]/90 bg-[#86198F]/70 text-[17px] rounded-xl"
              href="https://t.me/catmoggy"
              whileHover={{ backgroundColor: "#EFF6FF", color: "#172554" }}
              transition={{ ease: "circOut" }}
              aria-label="Join Telegram Community"
            >
              <p>Join TG Community</p>
              <RiTelegram2Fill className="w-5 h-5 text-[#EFF6FF] group-hover/parent:text-[#172554]" />
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
        id="tokenomics"
        className="flex flex-col gap-12 py-10 px-4 sm:px-6 min-lg:px-8 xl:px-10 2xl:px-24 w-[100%]"
      >
        <section className="flex flex-col min-lg:flex-row gap-4 min-lg:gap-0 min-lg:justify-between text-blue-950">
          <motion.div
            className="flex flex-col gap-3 w-[100%] min-lg:w-[580px] xl:w-[690px] 2xl:w-[790px] min-lg:relative"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeIn" }}
            viewport={{ amount: 0.2, once: false }}
          >
            <h3 className="font-thin opacity-80 text-[20px] xl:text-[24px] 2xl:text-[26px] tracking-wide leading-relaxed">
              (CATMOGGY TOKENOMICS)
            </h3>
            <p className="text-[3rem] md:text-[5rem] xl:text-[6rem] 2xl:text-[7rem] tracking-wider w-[100%] leading-none">
              KEY STATS AND SECURITY
            </p>
          </motion.div>
          <div className="w-[200px] self-center hidden min-lg:block">
            <img src={lines_img} alt="curvy line" />
          </div>
        </section>
        <section className="w-full flex flex-col items-center justify-center px-6 md:px-16">
          <motion.div
            className="flex flex-col w-full text-center items-center justify-start"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="font-bold text-5xl  text-blue-950">
              $CTY WHITEPAPER
            </h1>
            <h2 className="font-light text-xl leading-7  text-blue-950 max-w-2xl mt-2">
              CATSPLAY ($CTY): THE AI MEME & NFT REVOLUTION ON SOLANA!
              <br />
              Discover our vision, mission, and roadmap for the future of
              CatsPlay.
            </h2>
          </motion.div>

          <motion.div
            className="mt-8"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.4 }}
          >
            <a
              href="/assets/whitepaper-cmy.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold cursor-pointer px-4 uppercase border border-[#172554] shadow-[2px_2px_0_#172554] active:shadow-[0.5px_0.5px_0_#172554] active:translate-x-[1px] active:translate-y-[1px] text-[#EFF6FF] active:scale-[0.99] transition-all ease-linear duration-100 hover:bg-[#86198F]/80 active:bg-[#86198F]/90 bg-[#86198F]/70 text-[17px] py-2 rounded-xl flex items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Download Whitepaper
            </a>
          </motion.div>

          <motion.div
            className="mt-6 text-blue-950/70 text-base"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.6 }}
          >
            Learn about our technology, tokenomics, and the future of CatsPlay
          </motion.div>
        </section>
        <BlockTemplate />
      </section>
    </main>
  );
};

export default HomePage;
