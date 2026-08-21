// File: app/lib/constants.ts
export type SocialPlatform =
  | "facebook"
  | "linkedin"
  | "x"
  | "instagram"
  | "youtube";

export const SITE_CONFIG = {
  name: "1 Hour Spectacle Repairs",
  extendedName: "1 Hour Spectacle & Watch Repairs (Pty) Ltd",
  shortName: "1 Hour Spectacle Repairs",
  url: "https://1hourspectaclerepairs.co.za",
  emailHello: "hello@1hourspectaclerepairs.co.za",
  emailSupport: "support@1hourspectaclerepairs.co.za",
  phoneNumber_1: "+27743769563",
  phoneString_1: "+27 74 376 9563",
  whatsappString_1: "+27 74 376 9563",
  whatsappLink_1: "https://wa.me/27743769563",
  phoneNumber_2: "+27742788261",
  phoneString_2: "+27 74 278 8261",
  whatsappString_2: "+27 74 278 8261",
  whatsappLink_2: "https://wa.me/27742788261",
  address: "Shop 102/3 Fragrance Street Market, Croftdene, Chatsworth, Durban",
  workingHours: "Mon–Sun: 8am–5pm",
  startYearOfBusiness: 2004,
  // ✅ Social links grouped
  socialLinks: {
    facebook: {
      link: "https://web.facebook.com/1hourspecs/",
      active: true,
    },
    linkedin: {
      link: "https://www.linkedin.com/1hourspectaclerepairs/",
      active: false,
    },
    x: { link: "https://x.com/1hourspectaclerepairs43", active: false },
    instagram: {
      link: "https://www.instagram.com/1hourspectaclerepairs/",
      active: false,
    },
    youtube: {
      link: "https://www.youtube.com/1hourspectaclerepairs/",
      active: false,
    },
  } as const,
} as const;

// ✅ Reusable function
export function getYearsInBusiness(): number {
  return new Date().getFullYear() - SITE_CONFIG.startYearOfBusiness;
}