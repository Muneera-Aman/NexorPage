
import { PhoneCall, AtSign } from "lucide-react";

import {
  FaXTwitter,
  FaFacebook,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa6";

const footerLinks = [
  {
    title: "COMPANY",
    links: [
      { label: "Home", href: "/" },
      { label: "About Us", href: "/about" },
      { label: "Contact", href: "/" },
      { label: "Our Service", href: "/services" },
    ],
  },
  {
    title: "PAGES",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "Case Study", href: "/casestudies" },
    ],
  },
  {
    title: "RESOURCES",
    links: [
      { label: "Terms & Condition", href: "/terms-and-conditions" },
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "404", href: "/404" },
    ],
  },
];

const socialLinks = [
  { name: "X", href: "https://x.com", Icon: FaXTwitter },
  { name: "Facebook", href: "https://facebook.com", Icon: FaFacebook },
  { name: "Instagram", href: "https://instagram.com", Icon: FaInstagram },
  { name: "YouTube", href: "https://youtube.com", Icon: FaYoutube },
];

export default function Footer() {
  return (
    <footer id="footer" className="bg-[#F7F6F2] text-[#17201C]">
      <div className="mx-auto -mt-10 max-w-350 px-20 pb-10 pt-20 md:px-10 lg:px-15 lg:pt-20">

        <div className="grid grid-cols-2 gap-x-5 gap-y-10 sm:gap-x-8 lg:grid-cols-[2.5fr_1fr_1fr_1fr] lg:gap-10">

          <div className="col-span-2 flex flex-col items-start lg:col-span-1">

            <a href="/" className="inline-flex items-center">
              <img
                src="/Images/logo.png"
                alt="Nexor"
                className="h-auto w-35 object-contain"
              />
            </a>

            <p className="mt-7 text-md text-[#17201C] md:text-md">
              Modern Consultancy starts here.
            </p>

            <div className="mt-20 flex flex-col gap-5">
              <a
                href="tel:+48123421124"
                className="flex items-center gap-3 text-base transition-colors hover:text-[#60764B]"
              >
                <PhoneCall size={19} strokeWidth={1.7} />
                <span>+48 123 421 124</span>
              </a>

              <a
                href="mailto:info@Nexor.com"
                className="flex items-center gap-3 text-base transition-colors hover:text-[#60764B]"
              >
                <AtSign size={19} strokeWidth={1.7} />
                <span>info@Nexor.com</span>
              </a>

            </div>
          </div>

          {footerLinks.map((column) => (
            <div key={column.title}>

              <h3 className="mb-5 mt-10 text-[14px] font-normal text-[#858B89]">
                {column.title}
              </h3>

              <ul className="flex flex-col gap-4">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-base text-[#17201C] transition-colors duration-300 hover:text-[#60764B] md:text-md"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>

            </div>
          ))}
        </div>

        <div className="mt-25 flex flex-col justify-between gap-6 sm:flex-row sm:items-center">

          <p className="text-[15px] text-[#17201C]">
            Copyright © 2026 Nexor. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            {socialLinks.map(({ name, href, Icon }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
                className="text-[#17201C] transition-transform duration-300 hover:-translate-y-1"
              >
                <Icon size={19} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-5 w-full border-t border-[#DDDDDA]"></div>

        <div className="mt-5 space-y-6 text-[8px] leading-relaxed text-[#46504C] md:text-[14px]">

          <p>
            Nexor Business Consultation is a trusted consulting firm
            dedicated to helping businesses overcome challenges,
            improve performance, and achieve sustainable growth.
            We partner with startups, small and medium-sized
            businesses, and established enterprises to develop
            practical strategies that drive measurable results.
          </p>

          <p>
            Our team combines industry expertise, market insights,
            and data-driven decision-making to provide customized
            solutions that align with each client's unique goals.
            Whether you're launching a new business, expanding into
            new markets, improving operations, or planning long-term
            growth, Nexor provides the guidance and support you need
            to move forward with confidence.
          </p>

          <p>
            Nexor We implement appropriate security measures to
            protect your data from unauthorized access, disclosure,
            or misuse. By using our website and services, you agree
            to the collection and use of information in accordance
            with this privacy@Nexor.com.
          </p>
        </div>

      </div>
    </footer>
  );
}
