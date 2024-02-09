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
  isSplit?: boolean
  creatorFee?: number
  creatorFeeTreasury?: string
  nftSupply?: number
  nftMinted?: number
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
    tokenAmount: "20000",
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
    coinLogo: "https://bafybeif6spjgzd2v5stgfvkm5vu4q57kf3is77u3no24gennnmcrrycfke.ipfs.dweb.link/",
    tokenName: "switch",
    tokenTicker: "$switch",
    tokenAmount: "1,000",
    tick: "switch",
    decimals: 9,
    nftAmount: "1",
    nftToTokenSwapAmount: 1,
    tokenToNftSwapAmount: 1000*1.005,
    tokenDescription: "",
    bridgeContract: "Au8XfcFjbHqBMiHU7FmJJHJjS3zANxhWxRoHFfarVqSE",
    tokenContract: "DHL5KxPUxSK5svFn9etpp8D1EHBq2vY5tLq8MYL1Zogr",
    isToken22: true,
    taxBPS: 50,
    socialMediaLinks: [
      {
        name: "Solsniper",
        url: "https://www.sniper.xyz/collection/switch",
        icon: <SolsniperIcon />,
      },
      // Add other social media links here...
    ],
  },
  {
    coinLogo: "https://bafybeiegie2fiujpim4bda36rbhex5defntsx34jc3p7wzkfe3bx2gwcfi.ipfs.nftstorage.link/",
    tokenName: "SPLS",
    tokenTicker: "$SPLS",
    tokenAmount: "1000",
    tick: "spls",
    decimals: 9,
    nftAmount: "1",
    nftToTokenSwapAmount: 1,
    tokenToNftSwapAmount: 1000,
    tokenDescription: "SPLS is SPL22 first 21K NFTxTOKEN HYBRID.",
    bridgeContract: "971kLxBnZrZTsHrWvMYBFUCmargxbv9kPWPy5UETRBdD",
    tokenContract: "HbzbxCvrKTwppnSiFA73zNNjNwm764rhsdcw4spXpAvy",
    isToken22: true,
    taxBPS: 0,
    isSplit: true,
    // Ensure a marketplace link is last in the social media list
    socialMediaLinks: [
      {
        name: "X",
        url: "https://twitter.com/Paurojay_Spls",
        icon: <TwitterIcon />,
      },
      {
        name: "Discord",
        url: "https://discord.com/invite/c2pkuZ3DUD",
        icon: <DiscordIcon />,
      },
      {
        name: "Solsniper",
        url: "https://www.sniper.xyz/collection/spls",
        icon: <SolsniperIcon />,
      },
      // Add other social media links here...
    ],
  },
  {
    coinLogo: "https://i.ibb.co/61RVQqL/Pill.png",
    tokenName: "LUDES",
    tokenTicker: "$LUDES",
    tokenAmount: "10000",
    tick: "LUDES",
    decimals: 9,
    nftAmount: "1",
    nftToTokenSwapAmount: 1,
    tokenToNftSwapAmount: 10000,
    tokenDescription: "But Of All The Drugs Under God's Blue Heaven, Here Is One That Is My Absolute Favorite. Deflationary SPL22 NFT x Token Hybrid",
    bridgeContract: "GH2qX5FUD8d1hBfXPtp9pV2uVwAdHgHAyjTuHbeXADZg",
    tokenContract: "Bcayk4y8YB4xRamFZesunDQ13RSDaitxR4QjF1h6aVSN",
    isToken22: true,
    taxBPS: 200,
    // Ensure a marketplace link is last in the social media list
    socialMediaLinks: [
      {
        name: "X",
        url: "https://x.com/ludesspl20?s=21",
        icon: <TwitterIcon />,
      },
      {
        name: "Telegram",
        url: "https://t.me/+c5-UFUQERGYyNmNh",
        icon: <TelegramIcon />,
      },
      {
        name: "Tensor",
        url: "https://www.tensor.trade/trade/ludes",
        icon: <TensorIcon />,
      },
      // Add other social media links here...
    ],
  },
  {
    coinLogo: "https://bafybeigw27qfeatozpio4nfij5im3jssb723a53kzjdu2kf3dlf2utapna.ipfs.dweb.link/",
    tokenName: "MAFIA",
    tokenTicker: "$MAFIA",
    tokenAmount: "1000",
    tick: "MAFIA",
    decimals: 9,
    nftAmount: "1",
    nftToTokenSwapAmount: 1,
    tokenToNftSwapAmount: 1000,
    tokenDescription: "The biggest SPL22 Criminal Family. Low supply. Deflation. Killin… Kindness and hugs",
    bridgeContract: "9gJSwHSSxdtuemyB2EsEZ9bCJhuWknkrapg648k9kyhb",
    tokenContract: "BhGUQRspq34apPnGPwxajpCUD3KRxy2DUeNBsejn2zG5",
    isToken22: true,
    taxBPS: 500,
    // Ensure a marketplace link is last in the social media list
    socialMediaLinks: [
      {
        name: "X",
        url: "https://twitter.com/mafiaspl20",
        icon: <TwitterIcon />,
      },
      {
        name: "Telegram",
        url: "https://t.me/mafiaspl20",
        icon: <TelegramIcon />,
      },
      {
        name: "Magiceden",
        url: "https://magiceden.io/marketplace/mafia_spl20",
        icon: <MagicEdenIcon />,
      },
      {
        name: "Tensor",
        url: "https://www.tensor.trade/trade/mafia_spl20",
        icon: <TensorIcon />,
      },
      // Add other social media links here...
    ],
  },
  {
    coinLogo: "https://d3jhw9qabh9uvj.cloudfront.net/GS4jESBRZDBLRP7uYwmDGNF1iwFBcTX1RA2PoMAhvrYp_lg",
    tokenName: "FIRE",
    tokenTicker: "$FIRE",
    tokenAmount: "10000",
    tick: "FIRE",
    decimals: 9,
    nftAmount: "1",
    nftToTokenSwapAmount: 1,
    tokenToNftSwapAmount: 10000,
    tokenDescription: "First 3K deflationary SPL22 with Token Extension Transfer Tax. NFTxTOKEN Hybrid",
    bridgeContract: "BgX1f3PZm5HnPo7J1a4TVpc9fagFVWCpW7MQQs4ecFeN",
    tokenContract: "5y5NzHiWhfVLepMvQGxSURA95nSBZwAKxs8pKApE7LVa",
    isToken22: true,
    taxBPS: 330,
    // Ensure a marketplace link is last in the social media list
    socialMediaLinks: [
      {
        name: "X",
        url: "https://twitter.com/FireSPL22",
        icon: <TwitterIcon />,
      },
      {
        name: "Discord",
        url: "https://discord.gg/dzsyG6dU6B",
        icon: <DiscordIcon />,
      },
      {
        name: "Solsniper",
        url: "https://www.sniper.xyz/collection/fire_spl22",
        icon: <SolsniperIcon />,
      },
      {
        name: "Tensor",
        url: "https://www.tensor.trade/trade/fire_spl22",
        icon: <TensorIcon />,
      },
      // Add other social media links here...
    ],
  },
  {
    coinLogo: "https://bafybeid2o3jo2meddslrounzkzqavxeravrk4fhi4m2t26kgks7mx737ai.ipfs.dweb.link/",
    tokenName: "DE",
    tokenTicker: "$DE",
    tokenAmount: "21000",
    tick: "DE",
    decimals: 9,
    nftAmount: "1",
    nftToTokenSwapAmount: 1,
    tokenToNftSwapAmount: 21000,
    tokenDescription: "$DE for deflationary NFTxToken 22 standard.",
    bridgeContract: "5YahALH3cE4vsV4LGf4rN4EZQDMi2PnZi6y5hJMvpGYS",
    tokenContract: "5BHmx7fSPGTFQ9bVeCdK2BwWuZvDTxsMVZw3v4oxv9KE",
    isToken22: true,
    taxBPS: 65,
     // Ensure a marketplace link is last in the social media list
    socialMediaLinks: [
      {
        name: "X",
        url: "https://twitter.com/DEflationarySOL",
        icon: <TwitterIcon />,
      },
      {
        name: "Telegram",
        url: "https://t.me/DEflationarySOL",
        icon: <TelegramIcon />,
      },
      {
        name: "Tensor",
        url: "https://www.tensor.trade/trade/de22",
        icon: <TensorIcon />,
      },
      {
        name: "Solsniper",
        url: "https://www.sniper.xyz/collection/de2",
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
 // {
 //   coinLogo: "https://gateway.pinit.io/ipfs/QmapGPdxGPYedwWMiaiLRkh6HKxNxRg44U3rVGGjhK7wcn/0",
 //   tokenName: "bozi22",
 //   tokenTicker: "$bozi",
 //   tokenAmount: "1",
 //   tick: "bozi",
 //   decimals: 9,
 //   nftAmount: "1",
 //   nftToTokenSwapAmount: 1,
//    tokenToNftSwapAmount: 1,
 //   tokenDescription: "This is a test 2022 for purpose of playing with inscriptions.",
 //   bridgeContract: "fZLwuMQySoC3HdiSMcrJgQenHWcbihDpTvTDooyrHWd",
 //   tokenContract: "5YDreBBuAFgtqrUpXbfGfBck6cz4BBHDzySi9w8gvUFq",
 //   isToken22: true,
 //   taxBPS: 0,
    // Ensure a marketplace link is last in the social media list
//    socialMediaLinks: [
 //     {
  //      name: "Tensor",
 //       url: "#",
  //      icon: <TensorIcon />,
  //    },
      // Add other social media links here...
  //  ],
 // },
  // Add other coins
]
