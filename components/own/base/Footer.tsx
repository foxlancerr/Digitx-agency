import Image from "next/image";
import SectionWrapper, { FooterWrapper } from "./SectionWrapper";
import { IoLogoLinkedin, IoLogoTwitter } from "react-icons/io5";
import { FaSquareInstagram } from "react-icons/fa6";

interface MenuItem {
  title: string;
  links: {
    text: string;
    url: string;
  }[];
}

interface Footer2Props {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  tagline?: string;
  menuItems?: MenuItem[];
  copyright?: string;
  bottomLinks?: {
    text: string;
    url: string;
  }[];
}

const footerContent = {
  logo: {
    src: "/assets/images/logo.png",
    alt: "Digital Agency",
    title: "Digital Agency",
    url: "/",
  },
  tagline: "Components made easy.",
  menuItems: [
    {
      title: "Home",
      links: [
        { text: "Benefits", url: "#" },
        { text: "Our Testimonails", url: "#" },
        { text: "Partners", url: "#" },
      ],
    },
    {
      title: "Services",
      links: [
        { text: "Digital Marketing", url: "#" },
        { text: "App Development", url: "#" },
        { text: "Website Development", url: "#" },
        { text: "Web Design", url: "#" },
      ],
    },
    {
      title: "Projects",
      links: [
        { text: "ABC Tech Solutions", url: "#" },
        { text: "GreenEarth Eco Store", url: "#" },
        { text: "HealthTech Innovations", url: "#" },
        { text: "GlobalTech Solutions", url: "#" },
        { text: "TechGuru Inc.", url: "#" },
      ],
    },
    {
      title: "About us",
      links: [
        { text: "Our Team", url: "#" },
        { text: "Achievement", url: "#" },
        { text: "Awards", url: "#" },
      ],
    },
    {
      title: "Careers",
      links: [
        { text: "Job Opening", url: "#" },
        { text: "Benefits & perks", url: "#" },
        { text: "Emplyee Referals", url: "#" },
      ],
    },
    {
      title: "Blogs",
      links: [{ text: "Our blogs", url: "#" }],
    },
  ],
  copyright: "© 2025 Digitax. All Rights Reserved.",
  bottomLinks: [
    { text: "Terms and Conditions", url: "#" },
    { text: "Privacy Policy", url: "#" },
  ],
};
const Footer = () => {
  return (
    <FooterWrapper>
      <footer className="pb-12">
        {/* top footer */}
        <div className="flex gap-4 justify-between items-center">
          <div className="flex items-center gap-2 lg:justify-start">
            <Image
              width={60}
              height={40}
              src={footerContent.logo.src}
              alt={footerContent.logo.alt}
              title={footerContent.logo.title}
              className="h-10"
            />
          </div>

          <div className="gap-2 sm:gap-8 items-center flex sm:flex-row flex-col">
            <p className="text-sm sm:text-base font-medium">
              Follow Us on social media
            </p>
            <div className="flex flex-row space-x-4">
              <div className="flex items-center justify-center rounded-full border-2 h-10 sm:h-14 w-10 sm:w-14 bg-linear-to-br from-gray-20 to-gray-10 cursor-pointer">
                <IoLogoLinkedin className="size-5 sm:size-6" />
              </div>
              <div className="flex items-center justify-center rounded-full border-2 h-10 sm:h-14 w-10 sm:w-14 bg-linear-to-br from-gray-20 to-gray-10 cursor-pointer">
                <IoLogoTwitter className="size-5 sm:size-6" />
              </div>
              <div className="flex items-center justify-center rounded-full border-2 h-10 sm:h-14 w-10 sm:w-14 bg-linear-to-br from-gray-20 to-gray-10 cursor-pointer">
                <FaSquareInstagram className="size-5 sm:size-6" />
              </div>
            </div>
          </div>
        </div>

        <hr className="my-6 mb-12" />
        {/* center footer */}
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-6">
          {footerContent.menuItems.map((section, sectionIdx) => (
            <div key={sectionIdx}>
              <h3 className="mb-5 font-bold">{section.title}</h3>
              <ul className="text-muted-foreground space-y-2">
                {section.links.map((link, linkIdx) => (
                  <li key={linkIdx} className="hover:text-primary-foreground font-normal">
                    <a href={link.url}>{link.text}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* bottom footer */}
        <div className="text-muted-foreground mt-12 flex flex-col justify-between gap-4 border-t pt-8 text-sm font-normal md:flex-row md:items-center">
          <p>{footerContent.copyright}</p>
          <ul className="flex gap-4">
            {footerContent.bottomLinks.map((link, linkIdx) => (
              <li key={linkIdx} className="hover:text-primary font-normal">
                <a href={link.url}>{link.text}</a>
              </li>
            ))}
          </ul>
        </div>
      </footer>
    </FooterWrapper>
  );
};

export default Footer;
