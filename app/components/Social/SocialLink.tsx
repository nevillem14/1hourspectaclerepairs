// File: SocialLink.tsx
import toast from "react-hot-toast";
import { SITE_CONFIG, type SocialPlatform } from "~/lib/constants";

import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";

const ICONS: Record<SocialPlatform, React.ReactElement> = {
  facebook: <FaFacebookF />,
  linkedin: <FaLinkedinIn />,
  x: <FaXTwitter />,
  instagram: <FaInstagram />,
  youtube: <FaYoutube />,
};

type SocialLinkProps = {
  platform: SocialPlatform;
};

export default function SocialLink({ platform }: SocialLinkProps) {
  const { link, active } = SITE_CONFIG.socialLinks[platform];

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    if (!active) {
      toast.error(
        `${platform.charAt(0).toUpperCase() + platform.slice(1)} link is not ready yet!`
      );
      return;
    }

    window.open(link, "_blank", "noopener,noreferrer");
  };

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      aria-label={platform}
      className="hover:text-yellow-400 transition-colors duration-200"
    >
      {ICONS[platform]}
    </a>
  );
}
