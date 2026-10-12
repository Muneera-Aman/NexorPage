
import { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router";
import { ChevronDown, Menu, X } from "lucide-react";
import PagesDropdown from "./PagesDropdown";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Pages", href: "/pages" },
  { label: "Service", href: "/services" },
  { label: "Contact", href: "/#footer" },
  { label: "Blog", href: "/blog" },
];

function Navbar() {
  const [pagesOpen, setPagesOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const dropdownRef = useRef(null);
  const mobileMenuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setPagesOpen(false);
      }

      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    }

    function handleEscape(event) {
      if (event.key === "Escape") {
        setPagesOpen(false);
        setMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const closeMenus = () => {
    setPagesOpen(false);
    setMenuOpen(false);
  };

  return (
    <header className="relative top-0 z-50">
      <nav className="mx-auto flex items-center justify-between px-5 py-6 lg:px-7">

        <Link to="/" onClick={closeMenus} className="shrink-0">
          <img
            src="/Images/logo.png"
            alt="Nexor"
            className="w-32 sm:w-36 lg:ml-4 lg:w-40 xl:ml-30 lg:h-15"
          />
        </Link>

        <ul className="hidden items-center gap-4 rounded-lg bg-white p-3 text-base font-medium text-neutral-700 lg:flex xl:gap-8">
          {navLinks.map((link) => (
            <li
              key={link.label}
              ref={link.label === "Pages" ? dropdownRef : null}
              className={link.label === "Pages" ? "relative" : ""}
            >
              {link.label === "Pages" ? (
                <>
                  <button
                    type="button"
                    onClick={() => setPagesOpen((prev) => !prev)}
                    aria-expanded={pagesOpen}
                    aria-controls="pages-dropdown"
                    className="flex cursor-pointer items-center gap-2 transition hover:text-[#251d2a]"
                  >
                    Pages
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-300 ${
                        pagesOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {pagesOpen && (
                    <PagesDropdown
                      onClose={() => setPagesOpen(false)}
                    />
                  )}
                </>
              ) : (
                <NavLink
                  to={link.href}
                  onClick={closeMenus}
                  className="transition hover:text-[#251d2a] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#6f2c91]"
                >
                  {link.label}
                </NavLink>
              )}
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Link
            to="/contact"
            onClick={closeMenus}
            className="mr-0 inline-flex items-center justify-center rounded-lg bg-[#060606] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#857a8b] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#78747b] xl:mr-30"
          >
            Contact us
          </Link>
        </div>

        <div ref={mobileMenuRef} className="relative lg:hidden">
          <button
            type="button"
            onClick={() => {
              setMenuOpen((prev) => !prev);
              setPagesOpen(false);
            }}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-lg bg-white text-[#17201C]"
          >
            {menuOpen ? <X size={25} /> : <Menu size={25} />}
          </button>

          {menuOpen && (
            <div
              id="mobile-navigation"
              className="absolute right-0 top-full z-50 mt-4 w-[min(85vw,320px)] max-h-[75vh] overflow-y-auto rounded-2xl border border-gray-200 bg-white p-5 shadow-xl"
            >
              <ul className="flex flex-col gap-5">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    {link.label === "Pages" ? (
                      <div>
                        <button
                          type="button"
                          onClick={() => setPagesOpen((prev) => !prev)}
                          aria-expanded={pagesOpen}
                          className="flex w-full cursor-pointer items-center justify-between text-base font-medium text-neutral-700"
                        >
                          Pages
                          <ChevronDown
                            size={18}
                            className={`transition-transform duration-300 ${
                              pagesOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>

                        {pagesOpen && (
                          <div className="mt-4 rounded-xl bg-[#F7F6F2] p-3">
                            <PagesDropdown onClose={closeMenus} />
                          </div>
                        )}
                      </div>
                    ) : (
                      <NavLink
                        to={link.href}
                        onClick={closeMenus}
                        className="block text-base font-medium text-neutral-700 transition hover:text-[#251d2a]"
                      >
                        {link.label}
                      </NavLink>
                    )}
                  </li>
                ))}
              </ul>

              <Link
                to="/contact"
                onClick={closeMenus}
                className="mt-6 flex items-center justify-center rounded-lg bg-[#060606] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#857a8b]"
              >
                Contact us
              </Link>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
