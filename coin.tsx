import React from 'react';

// Define the structure of a social media link
export interface SocialMediaLink {
  name: string
  url: string
  icon: JSX.Element // JSX.Element since icons are React components
}

// Define the structure of a coin
export interface Coin {
  tokenName: string
  tokenTicker: string
  tokenAmount: string
  nftAmount: string
  tick: string
  tokenDescription: string
  bridgeContract: string
  tokenContract: string
  coinLogo: string // path to the logo image
  socialMediaLinks: SocialMediaLink[]
  nftToTokenSwapAmount: number
  tokenToNftSwapAmount: number
  decimals: number
  isToken22: boolean
  taxBPS: number
}

// Import icon components
import {
  TwitterIcon,
  DiscordIcon,
  TelegramIcon,
  TikTokIcon,
  GeckoTerminalIcon,
  MagicEdenIcon,
  TensorIcon,
  SolsniperIcon,
} from "../components/ui/SocialMediaIcons"

// Array of coins
export const coins: Coin[] = [
  {
    coinLogo: "/assets/coinLogos/bozo-logo.png",
    tokenName: "bozo HYBRID",
    tokenTicker: "$BOZO",
    tokenAmount: "800,000",
    tick: "bozo",
    decimals: 9,
    nftAmount: "1",
    nftToTokenSwapAmount: 1,
    tokenToNftSwapAmount: 800000,
    tokenDescription: "Bozo HYBRID is the first NFTxTOKEN hybrid innovation changing the game.",
    bridgeContract: "EXqYZtA1d4Nx2WjYuQ1GvdeujFM8VbvmjfdmJBJj7guc",
    tokenContract: "EJPtJEDogxzDbvM8qvAsqYbLmPj5n1vQeqoAzj9Yfv3q",
    isToken22: false,
    taxBPS: 0,
    // Ensure tensor link is last in the social media list
    socialMediaLinks: [
      {
        name: "X",
        url: "https://twitter.com/bozoHYBRID",
        icon: <TwitterIcon />,
      },
      {
        name: "Discord",
        url: "https://discord.gg/pXyRPg3fu2",
        icon: <DiscordIcon />,
      },
      {
        name: "Telegram",
        url: "https://t.me/bozoHYBRID",
        icon: <TelegramIcon />,
      },
      {
        name: "TikTok",
        url: "https://www.tiktok.com/@bozohybrid",
        icon: <TikTokIcon />,
      },
      {
        name: "GeckoTerminal",
        url: "https://www.geckoterminal.com/solana/pools/5zGFqaUYYtm7GMz9sD5kBhc294SRLA4hXfzwaHdM3kXo",
        icon: <GeckoTerminalIcon />,
      },
      {
        name: "Magic Eden",
        url: "https://magiceden.io/marketplace/bozo_",
        icon: <MagicEdenIcon />,
      },
      {
        name: "Tensor",
        url: "https://www.tensor.trade/trade/bozo_spl20",
        icon: <TensorIcon />,
      },
      // Add other social media links here...
    ],
  },
  {
    coinLogo: "https://bafybeievcwt2kef6olonvu4aaw2ud5tjezq567kqq7cijsquveim723fni.ipfs.nftstorage.link/",
    tokenName: "GH0ST",
    tokenTicker: "$GH0ST",
    tokenAmount: "1,000",
    tick: "GH0ST",
    decimals: 9,
    nftAmount: "1",
    nftToTokenSwapAmount: 1,
    tokenToNftSwapAmount: 1000,
    tokenDescription: "The first SPL22 fair launch inscription coin utilizing Token Extension Metadata as an open-source NFT standard.",
    bridgeContract: "E8E6GvyCpbGu7YSFxfhTXGx6SW4VhzVmxWh3gbrgXZNd",
    tokenContract: "HbxiDXQxBKMNJqDsTavQE7LVwrTR36wjV2EaYEqUw6qH",
    isToken22: true,
    taxBPS: 0,
    // Ensure a marketplace link is last in the social media list
    socialMediaLinks: [
      {
        name: "X",
        url: "https://twitter.com/GH0STC0IN",
        icon: <TwitterIcon />,
      },
      {
        name: "Discord",
        url: "https://discord.com/invite/RgtFus49A2",
        icon: <DiscordIcon />,
      },
      {
        name: "Telegram",
        url: "https://t.me/gh0stc0in",
        icon: <TelegramIcon />,
      },
      {
        name: "Solsniper",
        url: "https://www.sniper.xyz/collection/gh0st",
        icon: <SolsniperIcon />,
      },
      // Add other social media links here...
    ],
  },
  {
    coinLogo: "https://bafybeieprtdo3xgvk2ezdlqd47lhcnwdqneoig7jiiiuodoy36jmu6jhte.ipfs.dweb.link/",
    tokenName: "VICE",
    tokenTicker: "$VICE",
    tokenAmount: "10000",
    tick: "VICE",
    decimals: 9,
    nftAmount: "1",
    nftToTokenSwapAmount: 1,
    tokenToNftSwapAmount: 10000,
    tokenDescription: "First deflationary SPL22 with Token Extension Transfer Tax. NFTxTOKEN Hybrid 💸🦩🌴🐬",
    bridgeContract: "CiMbtrietnssxXHqiFmZrETxFuXXJhofmCyQqcBT3dxp",
    tokenContract: "AWeL8nCXxJm3GZkEVRqxeeT5KWT2KwDa1shgQFeBogkC",
    isToken22: true,
    taxBPS: 200,
    socialMediaLinks: [
      {
        name: "X",
        url: "https://twitter.com/ViceSpl20",
        icon: <TwitterIcon />,
      },
      {
        name: "Telegram",
        url: "https://t.me/+6mdLFerDKYUyY2Vh",
        icon: <TelegramIcon />,
      },
      {
        name: "Solsniper",
        url: "https://www.sniper.xyz/collection/vice",
        icon: <SolsniperIcon />,
      },
      // Add other social media links here...
    ],
  },
  {
    coinLogo: "https://bafkreibpa7tr3ytau2zn6yawj2a5do2mzhdebeim6qkbw5rc2s3hmfj6kq.ipfs.nftstorage.link/",
    tokenName: "j00ce",
    tokenTicker: "$j00ce",
    tokenAmount: "75",
    tick: "j00ce",
    decimals: 9,
    nftAmount: "1",
    nftToTokenSwapAmount: 1,
    tokenToNftSwapAmount: 75,
    tokenDescription: "got j00ce? 🧃",
    bridgeContract: "C89eJaCiHX7CCNLzuVBUwRSnqdnEoD3NSzRzHXdqaFSt",
    tokenContract: "Bjc5RNFVRyn4zkBmPuZBEJJSeYGLj9GuD5X2qqi2oDCa",
    isToken22: false,
    taxBPS: 0,
    socialMediaLinks: [
      {
        name: "X",
        url: "https://twitter.com/j00ce_inc",
        icon: <TwitterIcon />,
      },
      {
        name: "Discord",
        url: "https://discord.gg/pYCc89wdT6",
        icon: <DiscordIcon />,
      },
      {
        name: "Magiceden",
        url: "https://magiceden.io/marketplace/j00ce",
        icon: <MagicEdenIcon />,
      },
      // Add other social media links here...
    ],
  },
  {
    coinLogo: "https://bafybeicc3w2bi36zxiknqnvxuzp3spcw2dwboromit7g3we2ugxxjxlfve.ipfs.dweb.link/",
    tokenName: "GEM HYBRID",
    tokenTicker: "$GEM",
    tokenAmount: "21000",
    tick: "GEM",
    decimals: 9,
    nftAmount: "1",
    nftToTokenSwapAmount: 1,
    tokenToNftSwapAmount: 20000,
    tokenDescription: "GEM is First 1K deflationary SPL22 with Token Extension Transfer Tax NFTxTOKEN",
    bridgeContract: "BreAaEMQ8NscYRgZTGSEvcuxpYUDqP7a15CvBP3rg2BQ",
    tokenContract: "BHnyR5iCR8kBZhF97EJ6mi8K8JCFDNg19j5zaU35RLoJ",
    isToken22: true,
    taxBPS: 200,
    socialMediaLinks: [
      {
        name: "X",
        url: "https://twitter.com/GEMdeflationSOL",
        icon: <TwitterIcon />,
      },
      {
        name: "Telegram",
        url: "https://t.me/GEM_HYBRID",
        icon: <TelegramIcon />,
      },
      {
        name: "Solsniper",
        url: "https://www.sniper.xyz/collection/gem-t22",
        icon: <SolsniperIcon />,
      },
      // Add other social media links here...
    ],
  },
  {
    coinLogo: "https://nftstorage.link/ipfs/bafkreieizaoip6f5yvjatbwydzlyaztrata2baq4hroicm6bblkdsx2lom",
    tokenName: "TESTSpl20",
    tokenTicker: "$TEST",
    tokenAmount: "1,000",
    tick: "test",
    decimals: 9,
    nftAmount: "1",
    nftToTokenSwapAmount: 1,
    tokenToNftSwapAmount: 1000,
    tokenDescription: "This is the test SPL for purpose of playing with inscriptions.",
    bridgeContract: "2bSESUzjyCcG4Kbozf1ExTBBGx4rtqfGdnkSNZyfvD7Y",
    tokenContract: "5n3jtLLFETpTkqXUZQHHgiGs6zaNZP32GSWrHb2RzpbC",
    isToken22: false,
    taxBPS: 0,
    // Ensure a marketplace link is last in the social media list
    socialMediaLinks: [
      {
        name: "Tensor",
        url: "https://www.tensor.trade/trade/test_spl20",
        icon: <TensorIcon />,
      },
      // Add other social media links here...
    ],
  },
  // Add other coins
]
