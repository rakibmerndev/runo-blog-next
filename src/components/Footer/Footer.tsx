import Link from "next/link";
import {
  FaFacebook,
  FaLinkedin,
  FaPinterest,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  const socialLinks = [
    { name: "Facebook", icon: FaFacebook, url: "#" },
    { name: "Twitter", icon: FaTwitter, url: "#" },
    { name: "YouTube", icon: FaYoutube, url: "#" },
    { name: "Pinterest", icon: FaPinterest, url: "#" },
    { name: "LinkedIn", icon: FaLinkedin, url: "#" },
  ];

  const exploreLinks = [
    { label: "About", url: "#" },
    { label: "Partners", url: "#" },
    { label: "Job Opportunities", url: "#" },
    { label: "Advertise", url: "#" },
    { label: "Membership", url: "#" },
  ];

  return (
    <div className="text-white">
      {/* Main Footer Content */}
      <div className="bg-[#212529] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 py-8 sm:py-10 lg:py-16 px-4 sm:px-6 md:px-12 lg:px-20 ">
        {/* Contact Section */}
        <div className="flex flex-col">
          <h4 className="text-base sm:text-lg font-bold mb-4 sm:mb-6">
            Contact the Publisher
          </h4>
          <div className="text-xs sm:text-sm space-y-2 sm:space-y-3">
            <p>mikestrino.com</p>
            <p>+94 450 904 505</p>
          </div>
        </div>

        {/* Explore Section */}
        <div className="flex flex-col">
          <h4 className="text-base sm:text-lg font-bold mb-4 sm:mb-6">
            Explore
          </h4>
          <div className="text-xs sm:text-sm space-y-2 sm:space-y-3">
            {exploreLinks.map((link) => (
              <p key={link.label}>
                <Link href={link.url}>{link.label}</Link>
              </p>
            ))}
          </div>
        </div>

        {/* Headquarter Section */}
        <div className="flex flex-col">
          <h4 className="text-base sm:text-lg font-bold mb-4 sm:mb-6">
            Headquarter
          </h4>
          <p className="text-xs sm:text-sm leading-relaxed">
            191 Middleville Road,
            <br />
            NY 1001, Sydney
            <br />
            Australia
          </p>
        </div>

        {/* Connections Section */}
        <div className="flex flex-col">
          <h4 className="text-base sm:text-lg font-bold mb-4 sm:mb-6">
            Connections
          </h4>
          <div className="flex gap-3 sm:gap-4">
            {socialLinks.map((social) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.url}
                  title={social.name}
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full  flex items-center justify-center"
                >
                  <IconComponent size={16} className="sm:w-4.5 sm:h-4.5" />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="flex flex-col sm:flex-row justify-between items-center p-4 sm:p-6 md:p-8 lg:p-10 bg-[#343a40] gap-3 sm:gap-4 text-center sm:text-left px-3 sm:px-5 md:px-16">
        <p className="text-xs sm:text-sm font-semibold">
          2021 | RUNO Publisher Studio
        </p>
        <button className="text-xs sm:text-sm font-semibold">
          Subscribe Now
        </button>
      </div>
    </div>
  );
};

export default Footer;
