// File: SocialBar.tsx
import SocialLink from "./SocialLink";
import { type SocialPlatform, SITE_CONFIG } from "~/lib/constants";

export default function SocialBar() {
  // Get all platforms from SITE_CONFIG
  const platforms = Object.keys(SITE_CONFIG.socialLinks) as SocialPlatform[];

  return (
    <div className="flex space-x-4">
      {platforms.map((platform) => (
        <SocialLink key={platform} platform={platform} />
      ))}
    </div>
  );
}
