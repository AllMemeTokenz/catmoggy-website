"use client";
import type React from "react";

// NFT data type
interface NFT {
  collection: string;
  name: string;
  creator: string;
  price: number;
  currency?: string;
  image: string;
  buyLink: string;
}

// Sample NFT data with your Yawn styling but adapted to new structure
const nftData: NFT[] = [
  {
    collection: "Cat Moggy",
    name: "CATMOGGY #1",
    creator: "Cat Moggy",
    price: 51.25,
    currency: "SOL",
    image:
      "https://res.cloudinary.com/deeyw3apd/image/upload/v1742387804/nft-catmoggy-1_qqkbky.jpg",
    buyLink: "https://www.okx.com/ul/zzrMhDz",
  },
  {
    collection: "Cat Moggy",
    name: "CATMOGGY #2",
    creator: "Cat Moggy",
    price: 102.5,
    currency: "SOL",
    image:
      "https://res.cloudinary.com/deeyw3apd/image/upload/v1742392326/nft-catmoggy-2_fk1aob.jpg",
    buyLink: "https://www.okx.com/ul/4wjVUzc",
  },
  {
    collection: "Cat Moggy",
    name: "CATMOGGY #3",
    creator: "Cat Moggy",
    price: 153.75,
    currency: "SOL",
    image:
      "https://res.cloudinary.com/deeyw3apd/image/upload/v1742392340/nft-catmoggy-3_bxh7oh.jpg",
    buyLink: "https://www.okx.com/ul/a1llzC5",
  },
];

// NFT Card Component with new styling
function NFTCard({
  collection,
  name,
  creator,
  price,
  currency = "SOL",
  image,
  buyLink,
}: NFT) {
  return (
    <div className="w-full max-w-sm overflow-hidden transition-all duration-300 hover:shadow-lg border border-[#172554] shadow-[2px_2px_0_#172554] bg-[#c6d5ff] rounded-xl hover:translate-y-[-2px]">
      <div
        className="relative aspect-square overflow-hidden"
        onContextMenu={(e) => e.preventDefault()}
      >
        <img
          src={image || "/placeholder.svg"}
          alt={name}
          className="object-cover w-full h-full transition-transform duration-300 hover:scale-105 select-none pointer-events-none"
          draggable="false"
          style={{ userSelect: "none" }}
        />
        <div className="absolute inset-0 w-full h-full top-0 left-0" />
        <div className="absolute top-3 left-3">
          <span className="inline-block px-2 py-1 text-sm font-medium bg-[#c6d5ff] text-blue-950 border border-[#172554] rounded-full">
            {collection}
          </span>
        </div>
      </div>

      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-bold text-xl text-blue-950 truncate">{name}</h3>
        </div>

        <div className="flex items-center font-light text-lg text-blue-950 mb-3">
          <span>Created by </span>
          <span className="font-medium text-blue-950 ml-1">{creator}</span>
        </div>
      </div>

      <div className="p-4 pt-0 flex justify-between items-center mt-2">
        <div className="flex flex-col">
          <span className="text-lg text-blue-950">Current Price</span>
          <div className="flex items-center">
            <span className="font-bold text-lg text-blue-950">{price}</span>
            <span className="ml-1 text-blue-950">{currency}</span>
          </div>
        </div>

        <a
          href={buyLink}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold cursor-pointer px-4 uppercase border border-[#172554] shadow-[2px_2px_0_#172554] active:shadow-[0.5px_0.5px_0_#172554] active:translate-x-[1px] active:translate-y-[1px] text-[#EFF6FF] active:scale-[0.99] transition-all ease-linear duration-100 hover:bg-[#86198F]/80 active:bg-[#86198F]/90 bg-[#86198F]/70 text-[17px] py-2 rounded-xl"
        >
          Buy Now
        </a>
      </div>
    </div>
  );
}

// Main NFT Gallery Component with new layout
export default function NFTGallery() {
  // Disable right-click on the entire gallery
  const disableRightClick = (e: React.MouseEvent) => {
    e.preventDefault();
    return false;
  };

  return (
    <section
      className="w-full flex mb-5 lg:mb-0 lg:mt-10 flex-col lg:flex-row items-center justify-between lg:px-[111px] px-5 xl:px-[190px]"
      onContextMenu={disableRightClick}
    >
      <div className="flex my-10 xl:mx-9 w-full flex-col items-center justify-center">
        <h2 className="text-5xl font-bold mb-2 text-center text-blue-950">
          Featured NFTs
        </h2>
        <h3 className="text-2xl font-light mb-8 text-center text-blue-950">
          Explore our top Yawn NFTs rare, unique, and perfect for every
          collector. Get yours now before it{"'"}s gone!{" "}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {nftData.map((nft, index) => (
            <NFTCard key={index} {...nft} />
          ))}
        </div>
      </div>
    </section>
  );
}
