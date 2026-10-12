
import { Link } from "react-router";

const pageLinks = [
  [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Blog", href: "/blog" },
  ],
  [
    { label: "Case Study", href: "/casestudies" },
    { label: "Results", href: "/#results" },
    { label: "Our Impact", href: "/#impact" },
    { label: "Footer", href: "/#footer" },
  ],
];

export default function PagesDropdown({ onClose }) {
  return (
    <div
      id="pages-dropdown"
      className="absolute left-1/2 top-full z-50 mt-6 w-140 -translate-x-1/2 rounded-2xl border border-gray-200 bg-white p-8 shadow-xl"
    >
      <div className="grid grid-cols-2 gap-10">

        {pageLinks.map((column, index) => (
          <ul key={index} className="flex flex-col gap-5">

            {column.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.href}
                  onClick={onClose}
                  className="text-base font-normal text-[#5A6260] transition-colors duration-300 hover:text-[#17201C]"
                >
                  {link.label}
                </Link>
              </li>
            ))}

          </ul>
        ))}

      </div>
    </div>
  );
}
