export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Roll a Fisherman Wiki",
  shortName: "Roll a Fisherman",
  logoText: "RF",
  tagline: "Codes, Fish, Fishermen & Upgrade Guides",
  description: "Your ultimate guide to Roll a Fisherman on Roblox! Explore active codes, best fish, fishermen, upgrades, rebirths, offline earnings and progression guides.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://rollafishermanwiki.top",
  supportEmail: `support@${new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://rollafishermanwiki.top").hostname.replace(/^www\./, "")}`,
  gameUrl: "https://www.roblox.com/games/90920025162454/Roll-a-Fisherman",
  heroVideoId: "r89sRXBppNA", // Roll a Fisherman gameplay showcase
  social: {
    discord: "https://discord.com/invite/rollafisherman",
    youtube: "https://www.youtube.com/results?search_query=Roll+a+Fisherman+Roblox",
  },
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
