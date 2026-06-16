// Unified Brand Configuration
// Update these values to change the branding, copy, assets, and styling for the entire page.

module.exports = {
  // Brand Basics
  name: "BUFFALO",
  companyName: "Buffalo Beer Co.",
  tagline: "A bold Kentucky beer brewed in the USA with grit, craft, and a frontier spirit.",
  primaryColor: "#c78634", // HSL tailored gold
  secondaryColor: "#ffffff",

  // SEO & Metadata (For pre-rendered Server layout)
  seo: {
    title: "Buffalo Beer - Kentucky Craft Beer",
    description: "Buffalo Beer is a bold American beer brewed in Kentucky with a smooth malt body, crisp finish, and frontier attitude.",
    keywords: "Buffalo Beer, Kentucky beer, USA beer, craft beer, American lager, brewery, buffalo brewing",
    ogImage: "/assets/63e6221b5a1498d65857ff6a_NYATHI_CRAFTY_BITS_LANDSCAPE.webp",
    canonicalUrl: "https://buffalobeer.com/"
  },

  // Main Page Text Content (Organized by sections)
  content: {
    hero: {
      heading: "BUFFALO"
    },
    history: {
      heading1: "born",
      heading2: "IN",
      heading3: "BUFFALO",
      heading4: "COUNTRY",
      title: "Our Origin",
      paragraph: "Buffalo Beer was imagined in Kentucky, where long roads, oak barrels, live music, and late summer evenings all seem to ask for one thing: a beer with character. We brew for the people who like their stories honest, their pours cold, and their flavor strong enough to stand beside good food, good friends, and a night that refuses to end early."
    },
    story: {
      heading1: "BUILT",
      heading2: "WITH",
      heading3: "GRIT",
      title: "The Story",
      paragraph: "The buffalo is our symbol because it does not move for trends. It stands steady, powerful, and unmistakably American. Buffalo Beer carries that same energy: a Kentucky-made brew with a smooth malt backbone, a clean finish, and enough bite to feel memorable without getting heavy."
    },
    brand: {
      heading1: "",
      heading2: "BOLD",
      heading3: "BEER",
      title: "Our Brand",
      paragraph: "Buffalo Beer is made for the table, the tailgate, the backyard, and the bar top. It is confident without being loud, classic without feeling old, and crafted for drinkers who want an American beer with a real point of view.",
      proof: {
        eyebrow: "Kentucky brewed",
        title: "A smooth malt body with a clean, cold finish.",
        paragraph: "After the welcome, the story gets practical: what is in the glass, where it comes from, and why the buffalo mark belongs on it. This is a beer built for long evenings, loud tables, and straight-up American refreshment.",
        points: [
          "Selected barley malt, hops, yeast, and pure water",
          "Balanced for cookouts, bars, tailgates, and late nights",
          "Brewed in the USA with the Buffalo mark on every bottle"
        ]
      }
    },
    recipe: {
      heading1: "KENTUCKY",
      heading2: "MALT",
      heading3: "COLD",
      heading4: "FINISH",
      stat1: {
        title: "Brewed",
        desc: "with selected barley malt, hops, yeast & pure water."
      },
      stat2: {
        title: "5%",
        desc: "Alcohol, crisp body <br/>and a smooth finish"
      }
    },
    brewery: {
      heading1: "OUR",
      heading2: "KENTUCKY",
      paragraph1: "Buffalo Beer is brewed in the heart of Kentucky with an eye for balance: enough malt warmth to feel rich, enough hop character to stay bright, and a clean finish that keeps the next sip calling. Every batch is checked for clarity, aroma, carbonation, and consistency before it earns the buffalo mark.",
      paragraph2: "Every bottle carries the Buffalo mark as a promise: brewed in the USA, built with pride, and made to be shared."
    },
    usage: {
      storage: {
        title: "Storage",
        desc: "Store cold and keep away <br/>from direct sunlight"
      },
      shake: {
        title: "Serve it",
        desc: "Pour chilled into a glass <br/>or drink straight from the bottle"
      }
    },
    contact: {
      heading1: "GET",
      heading2: "IN TOUCH",
      heading3: "WITH US",
      phone: "+1 (502) 555-0198",
      email: "hello@buffalobeer.com",
      address: "Louisville, Kentucky, USA.",
      copyright: "(c) 2026 Buffalo Beer Co. All rights reserved."
    }
  },

  // Social Media Links
  socials: {
    facebook: "https://www.facebook.com/BuffaloBeer",
    twitter: "https://twitter.com/BuffaloBeer",
    instagram: "#"
  },

  // Local Asset References (Point directly to public/assets/)
  assets: {
    logo: "/assets/logo.jpeg",
    bLogo: "/assets/63ecc4a00bbcfd46c46a837a_Trace_128.png",
    bLogoW: "/assets/63e61b688f7e7ed65e5b0a94_b.svg",
    rotateTextSvg: "/assets/63ecf6e685b190418420c138_rotate-text.svg",
    bottleLottie: "/assets/63e61ddce565b83f1f04fa46_bottle_3d_fixed_2.json",
    bottleGlb: "/assets/3d/beer-bottle-two.glb",
    txtsLottie: "/assets/63e969f568e326e905f26ff4_63e21f1277369497ec7325f5_TXTs.json",

    // WebP/PNG Images
    historyBg: "/assets/63e6221b5a1498d65857ff6a_NYATHI_CRAFTY_BITS_LANDSCAPE.webp",
    historyBgMb: "/assets/63ebabbc92ab0b9961fff8d6_Rectangle_29.webp",
    historyBgMb2: "/assets/63ec163d472f8f02ade6c473_mobile-bg.png",
    handImg: "/assets/63e8ce3b3f71272152449cf5_hand.webp",
    handImgMb: "/assets/63ecad6386e480339d33c1a6_hand_(2).png",
    storyBg: "/assets/63e8cd9368e3267e88e50e0a_NYATHI_CRAFTY_BITS_LANDSCAPE.webp",
    brandBg: "/assets/63e90af93f712715fc48ca22_NYATHI_CRAFTY_BITS_LANDSCAPE.webp",
    brandBgMb: "/assets/63ebb8ac5faeff856cc479ef_Rectangle_29.webp",
    boysImg: "/assets/63e90b77037f3b2517d4756e_BOYS.webp",
    drumImg: "/assets/63e90bc74b769131c6341124_DRUM.webp",
    storageLeftBg: "/assets/63ea531d408a595ed6df58ce_AREA_2.webp",
    storageRightBg: "/assets/63ea531dc03b68afbc61ec94_NYATHI_CRAFTY_BITS_LANDSCAPE.webp"
  }
};
