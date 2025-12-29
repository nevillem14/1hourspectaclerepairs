// File: app/lib/constants.ts  
export type SocialPlatform = "facebook"  | "linkedin" | "x" | "instagram" | "youtube";

export const SITE_CONFIG = {
  name: "Winter Shadow Designs XI",
  shortName: "WSDXI",
  url: "https://wsdxi.co.za",
  emailHello: "hello@wsdxi.co.za",
  emailSupport: "support@wsdxi.co.za",
  phoneNumber: "+27718185904",
  phoneString: "+27 71 818 5904",
  whatsappString: "+27 71 818 5904", 
  whatsappLink: "https://wa.me/27718185904",
  address: "Durban, South Africa",
  workingHours: "Mon–Fri: 8am–4pm | Sat: Closed | Sun: Closed",
  
  // ✅ Social links grouped
  socialLinks: {
    facebook: { link: "https://www.facebook.com/wsdxi/", active: false },
    linkedin: { link: "https://www.linkedin.com/wsdxi/", active: false },
    x: { link: "https://x.com/wsdxi43", active: false },
    instagram: { link: "https://www.instagram.com/wsdxi/", active: false },
    youtube: { link: "https://www.youtube.com/wsdxi/", active: false },
  } as const,
  
} as const;